import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('musicaTema', 'assets/music/hp-theme.mp3').then(this.onSucess, this.onError);
    //this.nativeAudio.play('musicaTema').then(this.onSucess, this.onError);
    //this.nativeAudio.loop('musicaTema').then(this.onSucess, this.onError);
  }

  onSucess(data){
    console.log(data);
  }

  onError(data){
    console.log(data);
  }
}
