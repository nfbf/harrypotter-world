import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCasaPageRoutingModule } from './modal-casa-routing.module';

import { ModalCasaPage } from './modal-casa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCasaPageRoutingModule
  ],
  declarations: [ModalCasaPage]
})
export class ModalCasaPageModule {}
