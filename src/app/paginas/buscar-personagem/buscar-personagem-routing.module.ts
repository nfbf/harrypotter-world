import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarPersonagemPage } from './buscar-personagem.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPersonagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarPersonagemPageRoutingModule {}
