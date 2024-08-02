import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "listarPensamento",
    pathMatch: "full" //full: redireciona se a rota for exatamente igual a vazia
  },
  {
    path: "criarPensamento",
    component: CriarPensamentoComponent
  },
  {
    path: "litarPensamento",
    component: ListarPensamentoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
