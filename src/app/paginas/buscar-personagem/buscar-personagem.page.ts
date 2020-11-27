import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, LoadingController, NavController } from '@ionic/angular';
import { Personagem } from '../../model/personagem';

@Component({
  selector: 'app-buscar-personagem',
  templateUrl: './buscar-personagem.page.html',
  styleUrls: ['./buscar-personagem.page.scss'],
})

export class BuscarPersonagemPage  implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  listaPersonagens: Personagem[];
  personagensSelecionados: Personagem[];
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private router: Router,
              private loadingCtrl : LoadingController,
              private navCtrl : NavController) {}


  ngOnInit() {
    this.listaPersonagens = new Array();
    this.personagensSelecionados = new Array();
    const nav = this.router.getCurrentNavigation();
    this.listaPersonagens = nav.extras.state.listaPersonagens;
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

  public async avancarPagina(){
    const loading = await this.loadingCtrl.create({duration : 150, message:"Carregando..."});
    loading.present();
    this.navCtrl.navigateRoot('informacoes/casa', 
    { state : { listaPersonagens : this.listaPersonagens }});
  }

}
