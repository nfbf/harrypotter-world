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
  personagensSeleciondos : Personagem[];

  constructor(private infos: InfoPersonagensService) {
    this.listaPersonagens = new Array();
    this.personagensSeleciondos = new Array();

    this.infos.carregarPersonagens().then((sucess => {
      this.listaPersonagens = sucess;
    }), (error => {
      console.log('Deu erro irmão')
    }))
  }

  ngOnInit() {
  }

  onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.personagensSeleciondos = this.listaPersonagens.filter(term => {
        return term.name.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }
  }

}
