import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { InformacoesPersonagemPage } from '../informacoes-personagem/informacoes-personagem.page';
import { Personagem } from '../model/personagem';
import { InfoPersonagensService } from '../servicos/info-personagens.service';

@Component({
  selector: 'app-buscar-personagem',
  templateUrl: './buscar-personagem.page.html',
  styleUrls: ['./buscar-personagem.page.scss'],
})

export class BuscarPersonagemPage implements OnInit {

  listaPersonagens: Personagem[];
  personagensSelecionados : Personagem[];
 

  constructor(private infos: InfoPersonagensService, private modalController: ModalController) {
    this.listaPersonagens = new Array();
    this.personagensSelecionados = new Array();
    this.carregarListaPeronsagens();
  }

  ngOnInit() {
  }

  pesquisaPeloTermo(ev: CustomEvent) {
    const val = ev.detail.value;

    if(!val){
      this.personagensSelecionados = [];
      return;
    }

    if (val && val.trim() !== '') {
      this.personagensSelecionados = this.listaPersonagens.filter(term => {
        return term.name.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }
  }

  async itemSelecionado(item){
    const modal = await this.modalController.create({
      component: InformacoesPersonagemPage,
      componentProps: {
        personagemSelecionado: item
      }
    });
    return await modal.present();
  }

  carregarListaPeronsagens(){
    this.infos.buscarPersonagens().then((sucess => {
      this.listaPersonagens = sucess;
    }))
  }

}
