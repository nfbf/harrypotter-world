import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, IonSlides } from '@ionic/angular';
import { Personagem } from '../model/personagem';
import { InfoPersonagensService } from '../servicos/info-personagens.service';

@Component({
  selector: 'app-modal-casa',
  templateUrl: './modal-casa.page.html',
  styleUrls: ['./modal-casa.page.scss'],
})
export class ModalCasaPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  casaSelecionada: string;
  textoModal: string;
  imagemModal: string;
  personagens: Personagem[];

  constructor(private modalController: ModalController,
    private navParams: NavParams,
    private service: InfoPersonagensService) { }

  ngOnInit() {
    this.casaSelecionada = this.navParams.get('casaSelecionada');
    this.buscarPersonagens();
    this.montarModal();
  }

  public buscarPersonagens() {
    this.service.buscarCasas(this.casaSelecionada).then((sucess => {
      this.personagens = sucess;
    }))
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
    this.textoModal = 'Os membros da Grifinória são conhecidos por sua coragem e lealdade. Foi fundada pelo famoso bruxo da época, o poderoso Godric Gryffindor.';
    this.imagemModal = 'assets/img/grifinoria.png';
  }

  public montarModalSonserina() {
    this.textoModal = 'A casa Sonserina é conhecida por possuir os membros mais ambiciosos, calculistas e orgulhosos. Foi fundada pelo famoso bruxo Salazar Slytherin.';
    this.imagemModal = 'assets/img/sonserina.png';
  }

  public montarModalLufaLufa() {
    this.textoModal = 'A Casa Lufa-Lufa tem como membros os mais gentis, pacientes e tolerantes alunos. Foi fundada pelo bruxa Helga Hufflepuff.';
    this.imagemModal = 'assets/img/lufalufa.png';
  }

  public montarModalCorvinal() {
    this.textoModal = 'Corvinal é a casa daqueles que tem uma grande capacidade intelectual ou dos que são focados nos estudos. Foi fundada pela bruxa Rowena Revenclaw.';
    this.imagemModal = 'assets/img/corvinal.png';
  }

  public fecharModal() {
    this.modalController.dismiss();
  }

}
