import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCasaPage } from './modal-casa.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCasaPageRoutingModule {}
