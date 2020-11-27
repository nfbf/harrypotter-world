import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { LoadingController, NavController } from '@ionic/angular';
import { Personagem } from '../../model/personagem';
import { InfoPersonagensService } from '../../servicos/info-personagens.service';
import { Util } from '../../util/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listaPersonagens: Personagem[];

  constructor(private nativeAudio: NativeAudio,
    private infos: InfoPersonagensService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController) {

    this.nativeAudio.preloadSimple('musicaTema', 'assets/music/hp-theme.mp3').then(this.onSucess, this.onError);
    this.nativeAudio.play('musicaTema').then(this.onSucess, this.onError);
    this.nativeAudio.loop('musicaTema').then(this.onSucess, this.onError);
  }



  ngOnInit() {
    this.listaPersonagens = new Array();
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

  public async proximaPagina() {
    const loading = await this.loadingCtrl.create({ duration: 150, message: "Carregando..." });
    loading.present();
    this.navCtrl.navigateRoot('buscar/personagem',
      { state: { listaPersonagens: this.listaPersonagens } });
  }

  private onSucess(data) {
    console.log(data);
  }

  private onError(data) {
    console.log(data);
  }

}
