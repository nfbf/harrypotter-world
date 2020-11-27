import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { Personagem } from 'src/app/model/personagem';
import { ModalCasaPage } from '../modal-casa/modal-casa.page';

@Component({
  selector: 'app-informacoes-casa',
  templateUrl: './informacoes-casa.page.html',
  styleUrls: ['./informacoes-casa.page.scss'],
})
export class InformacoesCasaPage implements OnInit {

  listaPersonagens: Personagem[];

  constructor(private modalController: ModalController,
              private router: Router,
              private loadingCtrl : LoadingController,
              private navCtrl : NavController) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.listaPersonagens = nav.extras.state.listaPersonagens;
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

  public async  voltar(){
    const loading = await this.loadingCtrl.create({duration : 150, message:"Carregando..."});
    loading.present();

    this.navCtrl.navigateRoot('buscar/personagem', 
    { state : { listaPersonagens : this.listaPersonagens }});
  }
  
  public descubrirCasaHogwarts(){
    window.open('https://www.legiaodosherois.com.br/quiz/harry-potter-casas-hogwarts.html', "_blank");
  }


}
