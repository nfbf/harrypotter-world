import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalCasaPage } from '../modal-casa/modal-casa.page';

@Component({
  selector: 'app-informacoes-casa',
  templateUrl: './informacoes-casa.page.html',
  styleUrls: ['./informacoes-casa.page.scss'],
})
export class InformacoesCasaPage implements OnInit {

  constructor(private modalController: ModalController) {}

  ngOnInit() {
  }

  public async abrirModal(casaSelecionada: string) {
    const modal = await this.modalController.create({
      component: ModalCasaPage,
      componentProps: {
        casaSelecionada: casaSelecionada
      }
    });
    return await modal.present();
  }

  
}
