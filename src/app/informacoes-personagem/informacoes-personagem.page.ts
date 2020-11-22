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
  casaSelecionada: string;
  textoModal: string;
  imagemModal: string;


  constructor(private modalController: ModalController,
              private navParams: NavParams) {}

  ngOnInit() {
    this.casaSelecionada = this.navParams.get('casaSelecionada');
    this.montarModal();
  }

  public montarModal() {
    if (this.casaSelecionada == 'gryffindor')
      this.montarModalGrifinoria();
    else if (this.casaSelecionada == 'slytherin')
      this.montarModalSonserina();
    else if (this.casaSelecionada == 'hufflepuff')
      this.montarModalLufaLufa();
    else
      this.montarModalCorvinal();
  }


  public montarModalGrifinoria() {
    this.textoModal ='Os membros da Griffinória são conhecidos por sua coragem e lealdade. Foi fundada pelo famoso bruxo da época, o poderoso Godric Gryffindor.';
    this.imagemModal = 'assets/img/grifinoria.png';
  }

  public montarModalSonserina() {
    this.textoModal= 'A casa Sonserina é conhecida por possuir os membros mais ambiciosos, calculistas e orgulhosos. Foi fundada pelo famoso bruxo Salazar Slytherin.';
    this.imagemModal = 'assets/img/sonserina.png';
   }

  public montarModalLufaLufa() { 
    this.textoModal='A Casa Lufa-Lufa tem como membros os mais gentis, pacientes e tolerantes alunos. Foi fundada pelo bruxa Helga Hufflepuff.';
    this.imagemModal = 'assets/img/lufalufa.png';
  }

  public montarModalCorvinal() { 
    this.textoModal='Corvinal é a casa daqueles que tem uma grande capacidade intelectual ou dos que são focados nos estudos. Foi fundada pela bruxa Rowena Revenclaw.';
    this.imagemModal = 'assets/img/corvinal.png';
  }


  public fecharModal() {
    this.modalController.dismiss();
  }


}
