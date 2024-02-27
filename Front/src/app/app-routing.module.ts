import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransacaoComponent } from './transacao/transacao.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title:"Financial Transactions System"},
  { path: 'transacoes', pathMatch: 'full', component:TransacaoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
