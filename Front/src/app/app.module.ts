import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TransacaoComponent } from './transacao/transacao.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormTransacaoComponent } from './transacao/form-transacao/form-transacao.component';
import { BotoesAcaoComponent } from './transacao/botoes-acao/botoes-acao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransacaoComponent,
    HeaderComponent,
    FooterComponent,
    FormTransacaoComponent,
    BotoesAcaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
