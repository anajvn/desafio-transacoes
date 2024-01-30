import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacao } from './transacao';


@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor(private http:HttpClient) { }

  private url = 'http://localhost:8080/transacao';

  public recuperaTransacoes():Observable<Transacao[]>{
    return this.http.get<Transacao[]>(this.url);
  }

  public recuperaTransacaoPorCategoria(categoria: string): Observable<Transacao[]>{
    return this.http.get<Transacao[]>(this.url + "/porCategoria/" + categoria);
  }

  public obterCategorias(): Observable<string[]>{
    return this.http.get<string[]>(this.url + "/categorias");
  }

  public obterValorPorCategoria(categoria: string): Observable<number>{
    return this.http.get<number>(this.url + "/valor/" + categoria);
  }

  public salvarTransacao(transacao: Transacao): Observable<Transacao>{
    return this.http.post<Transacao>(this.url, transacao);
  }

  public alterarTransacao(transacao:Transacao): Observable<Transacao>{
    return this.http.put<Transacao>(this.url, transacao);
  }

  public apagarTransacao(id: number): Observable<Transacao>{
    return this.http.delete<Transacao>(this.url + "/" + id);
  }

  public apagarTodasAsTransacoes(): Observable<Transacao>{
    return this.http.delete<Transacao>(this.url+"/");
  }
}
