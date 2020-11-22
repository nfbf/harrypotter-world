import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personagem } from '../model/personagem';

@Injectable({
  providedIn: 'root'
})

export class InfoPersonagensService {

  API_URL_PERSONAGENS : string = "http://hp-api.herokuapp.com/api/characters"
  API_URL_ESTUDANTES : string = "http://hp-api.herokuapp.com/api/characters/students"
  API_URL_FUNCIONARIOS : string = "http://hp-api.herokuapp.com/api/characters/staff"
  API_URL_CASAS : string = "http://hp-api.herokuapp.com/api/characters/house/";

  constructor(private http : HttpClient) {}

  carregarPersonagens(){
    return this.http.get<Personagem[]>(this.API_URL_PERSONAGENS).toPromise();
  }

  carregarEstudantes(){
    return this.http.get<Personagem[]>(this.API_URL_ESTUDANTES).toPromise();
  }

  carregarFuncionarios() {
    return this.http.get<Personagem[]>(this.API_URL_FUNCIONARIOS).toPromise();
  }

  carregarCasas(casa : string){
    return this.http.get<Personagem[]>(this.API_URL_CASAS + casa).toPromise();
  }

}
