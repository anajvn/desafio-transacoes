import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransacaoService } from './transacao.service';
import { Transacao } from './transacao';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.scss']
})
export class TransacaoComponent implements OnInit{

  constructor(private transacaoService: TransacaoService) {}

  ngOnInit(): void {
    this.fazerFiltragem();
  }

  listaTransacoes: Transacao[] = [];
  transacaoSelecionada: Transacao = new Transacao;

  listaCategorias: string[] = ["todas"];
  categoriaSelecionada: string = "todas";
  valorTotal: string = "";

  // dataFiltrada: string = "";
  // listaTransacoesFiltradas: Transacao[] = [];

  consultarTodasAsTransacoes(): void{
    if(this.categoriaSelecionada == "todas"){
      this.transacaoService.recuperaTransacoes().subscribe(
        (resposta) => {
          this.listaTransacoes = resposta;
          // this.atualizarListaTransacoesFiltradas();
        },
        (erro) => {
          console.log(erro)
        }
    )} else {
      this.consultarPorCategoria();
    }
    
    this.obterCategorias();
    this.obterValor();
  }

  consultarPorCategoria(): void{
    this.transacaoService.recuperaTransacaoPorCategoria(this.categoriaSelecionada).subscribe(
      (resposta) => {
        this.listaTransacoes = resposta;
      },
      (erro) => {
        console.log(erro);
      }
    )
  }

  fazerFiltragem():void{
    this.consultarTodasAsTransacoes();
    //this.filtrarPorData();
  }

  obterCategorias(): void {
    this.transacaoService.obterCategorias().subscribe(
      (resposta) => {
        resposta.forEach(r => {
          if(!this.listaCategorias.includes(r)){
            this.listaCategorias.push(r);
          }})
      },
      (erro) => {
        console.log(erro);
      }
    )
  }

  obterValor():void{
    this.transacaoService.obterValorPorCategoria(this.categoriaSelecionada).subscribe(
      (resposta) => {
        this.valorTotal = resposta.toFixed(2);
      },
      (erro) =>{
        console.log(erro);
      }
    )
  }

  selecaoCategoria(event: any){
    this.categoriaSelecionada = event.target.value;
    this.fazerFiltragem();
  }

  // selecaoData(event: any){
  //   this.dataFiltrada = event.target.value;
  //   this.fazerFiltragem();
  // }

  // filtrarPorData() {
  //   if (this.dataFiltrada != "") {
  //     const dataFiltradaTimestamp = new Date(this.dataFiltrada).getTime();
  //     this.listaTransacoesFiltradas = this.listaTransacoes.filter(transacao => {
  //       if (transacao.data != undefined) {
  //         const transacaoTimestamp = new Date(transacao.data).getTime();
  //         return transacaoTimestamp == dataFiltradaTimestamp;
  //       }
  //       return false;
  //     });
  //   } else {
  //     this.atualizarListaTransacoesFiltradas();
  //   }
  // }

  // private atualizarListaTransacoesFiltradas() {
  //   this.listaTransacoesFiltradas = [...this.listaTransacoes];
  // }
}
