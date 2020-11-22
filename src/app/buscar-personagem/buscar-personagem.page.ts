import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, NavController } from '@ionic/angular';
import { InformacoesPersonagemPage } from '../informacoes-personagem/informacoes-personagem.page';
import { Personagem } from '../model/personagem';
import { InfoPersonagensService } from '../servicos/info-personagens.service';
import { Util } from '../util/util';

@Component({
  selector: 'app-buscar-personagem',
  templateUrl: './buscar-personagem.page.html',
  styleUrls: ['./buscar-personagem.page.scss'],
})

export class BuscarPersonagemPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  listaPersonagens: Personagem[];
  personagensSelecionados: Personagem[];
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private infos: InfoPersonagensService,
    private modalController: ModalController) { }


  ngOnInit() {
    this.listaPersonagens = new Array();
    this.personagensSelecionados = new Array();
    this.carregarListaPersonagens();
  }

  public carregarListaPersonagens() {
    this.infos.buscarPersonagens().then((sucess => {
      this.listaPersonagens = sucess;
      this.listaPersonagens.forEach(personagem => {
        personagem.dateOfBirth = personagem.dateOfBirth ? Util.formartarDataBrasil(personagem.dateOfBirth) : 'Desconhecida';
        personagem.house = Util.traduzirNomeCasa(personagem.house);
        personagem.gender = Util.traduzirSexoPersonagem(personagem.gender);
      })
    }))
  }

  public pesquisaPeloTermo(ev: CustomEvent) {
    const val = ev.detail.value;
    if (!val) {
      this.personagensSelecionados = [];
      return;
    }
    if (val && val.trim() !== '') {
      this.personagensSelecionados = this.listaPersonagens.filter(term => {
        return term.name.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }
  }

  public encontrarPersonagemSelecionado(item) {
    const index = this.listaPersonagens.indexOf(item)
    this.slides.slideTo(index, 0);
  }

  public slidePrev() {
    this.slides.slidePrev();
  }
  public slideNext() {
    this.slides.slideNext();
  }

}
