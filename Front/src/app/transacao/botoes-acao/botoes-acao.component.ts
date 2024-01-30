import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TransacaoService } from '../transacao.service';
import { Transacao } from '../transacao';

@Component({
  selector: 'app-botoes-acao',
  templateUrl: './botoes-acao.component.html',
  styleUrls: ['./botoes-acao.component.scss']
})
export class BotoesAcaoComponent {

  constructor(private transacaoService: TransacaoService){}

  @Output()
  statusParaAtualizacao: EventEmitter<boolean> = new EventEmitter(false);

  @Input()
  transacao: Transacao = new Transacao;
  
  apagarTransacaoSelecionada(id: number):void{
    this.transacaoService.apagarTransacao(id).subscribe(
      () => {
        alert("Transação apagada com sucesso!");
        this.statusParaAtualizacao.emit(true);
      },
      (erro) => {
        console.log(erro);
      }
    )
  }
}
