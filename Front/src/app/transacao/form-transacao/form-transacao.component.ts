import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transacao } from '../transacao';
import { TransacaoService } from '../transacao.service';

@Component({
  selector: 'app-form-transacao',
  templateUrl: './form-transacao.component.html',
  styleUrls: ['./form-transacao.component.scss']
})
export class FormTransacaoComponent {

  constructor(private transacaoService: TransacaoService){}

  @Output()
  statusParaAtualizacao: EventEmitter<boolean> = new EventEmitter(false);
  
  @Input()
  transacao: Transacao = new Transacao;

  // Novas transações
  stringTransacao: string = "";
  listaTransacoes: string[] = [];

  caixaTexto = false;
  caixaId = false;

  // Alterar transação
  idTransacao: number| null = null;
  transacaoAtualizada: string = "";

  inserirTransacao():void{
    this.caixaTexto = !this.caixaTexto;
    this.caixaId = false;
  }

  alterarTransacao():void{
    this.caixaTexto = false;
    this.caixaId = !this.caixaId;
  }

  limparTodasAsTransacoes():void{
    this.caixaTexto = false;
    this.caixaId = false;
    
    if(window.confirm("Você tem certeza que gostaria de apagar todas as transações do banco? Esta não é uma operação que pode ser desfeita.")){
      this.transacaoService.apagarTodasAsTransacoes().subscribe(
        () => {
          alert("Todas as transações foram apagadas!");
          this.statusParaAtualizacao.emit(true);
        },
        (erro) => {
          console.log(erro);
        }
      )
    } 
  }

  limpar():void{
    this.stringTransacao = "";
    this.listaTransacoes = [];
    this.idTransacao = null;
    this.transacaoAtualizada = "";

  }

  salvar():void{
    this.separarStrings(this.stringTransacao);
    for(let transacaoStr of this.listaTransacoes){
      let transacao = this.criarTransacao(transacaoStr);
      this.transacaoService.salvarTransacao(transacao).subscribe(
        () => {
          this.limpar();
        },
        (erro) => {
          console.log(erro);
          return;
        }
      )
    }
    alert("Transações adicionadas com sucesso!");
    this.statusParaAtualizacao.emit(true);
  }
  alterar():void{
    if(this.idTransacao == null){
      alert("O id não pode estar vazio")
      return;
    }
    if(this.transacaoAtualizada == ""){
      alert("O campo da transação não pode estar vazio")
      return;
    }
    this.separarStrings(this.transacaoAtualizada);
    const transacaoAlterada = this.criarTransacao(this.listaTransacoes[0], this.idTransacao);
    this.transacaoService.alterarTransacao(transacaoAlterada).subscribe(
      () => {
        this.limpar();
        alert("Transação atualizada com sucesso!");
        this.statusParaAtualizacao.emit(true);
      },
      (erro) => {
        console.log(erro);
      }
    )
  }

  separarStrings(input: string){
    
    // Retira espaços entre as strings
    input = input.replace(/\s/g, "");
    
    //Remove as aspas no início e no final
    input = input.substring(1, input.length - 1);

    // Divide as strings com base na vírgula
    let partes: string[] = input.split("\",\"");

    for (let parte of partes) {
      this.listaTransacoes.push(parte);
    }
  }

  criarTransacao(transacaoStr: string, id: number|null= null): Transacao{
    let dados = transacaoStr.split(",");
    let transacao = new Transacao(id, dados[0], Number(dados[1]), dados[2]); 

    return transacao;
  }
  
}
