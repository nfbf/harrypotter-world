import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Personagem } from '../model/personagem';

@Component({
  selector: 'app-informacoes-personagem',
  templateUrl: './informacoes-personagem.page.html',
  styleUrls: ['./informacoes-personagem.page.scss'],
})
export class InformacoesPersonagemPage implements OnInit {

  personagemSelecionado: Personagem

  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    this.personagemSelecionado = this.navParams.get('personagemSelecionado');
    this.formatarValores();
  }

  formatarValores(){

  }


  fecharModal() {
    this.modalController.dismiss();
  }


}
