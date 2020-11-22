import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, IonSlides } from '@ionic/angular';
import { Personagem } from '../model/personagem';
import { Util } from '../util/util';

@Component({
  selector: 'app-informacoes-personagem',
  templateUrl: './informacoes-personagem.page.html',
  styleUrls: ['./informacoes-personagem.page.scss'],
})
export class InformacoesPersonagemPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  personagemSelecionado: Personagem
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    this.personagemSelecionado = this.navParams.get('personagemSelecionado');
    this.formatarValores();
  }

  public formatarValores(){
    this.personagemSelecionado.dateOfBirth = Util.formartarDataBrasil(this.personagemSelecionado.dateOfBirth)
    this.personagemSelecionado.gender= Util.traduzirSexoPersonagem(this.personagemSelecionado.gender);
    this.personagemSelecionado.house = Util.traduzirNomeCasa(this.personagemSelecionado.house);
  }


  public fecharModal() {
    this.modalController.dismiss();
  }

  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }


}
