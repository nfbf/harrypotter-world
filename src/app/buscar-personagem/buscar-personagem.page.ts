import { Component, OnInit } from '@angular/core';
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
  autocomplete: { input: string; };

  constructor(private infos: InfoPersonagensService) {
    this.listaPersonagens = new Array();
    this.personagensSelecionados = new Array();
    this.autocomplete = { input: '' };

    this.infos.carregarPersonagens().then((sucess => {
      this.listaPersonagens = sucess;
    }), (error => {
      console.log(error)
    }))
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

  itemSelecionado(item){
    console.log(item)
  }

}
