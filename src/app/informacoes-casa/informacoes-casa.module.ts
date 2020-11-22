import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacoesCasaPageRoutingModule } from './informacoes-casa-routing.module';

import { InformacoesCasaPage } from './informacoes-casa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacoesCasaPageRoutingModule
  ],
  declarations: [InformacoesCasaPage]
})
export class InformacoesCasaPageModule {}
