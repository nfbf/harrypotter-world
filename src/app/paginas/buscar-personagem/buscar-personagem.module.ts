import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPersonagemPageRoutingModule } from './buscar-personagem-routing.module';

import { BuscarPersonagemPage } from './buscar-personagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPersonagemPageRoutingModule
  ],
  declarations: [BuscarPersonagemPage]
})
export class BuscarPersonagemPageModule {}
