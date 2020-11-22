import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacoesPersonagemPageRoutingModule } from './informacoes-personagem-routing.module';

import { InformacoesPersonagemPage } from './informacoes-personagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacoesPersonagemPageRoutingModule
  ],
  declarations: [InformacoesPersonagemPage]
})
export class InformacoesPersonagemPageModule {}
