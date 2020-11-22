import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacoesPersonagemPage } from './informacoes-personagem.page';

const routes: Routes = [
  {
    path: '',
    component: InformacoesPersonagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacoesPersonagemPageRoutingModule {}
