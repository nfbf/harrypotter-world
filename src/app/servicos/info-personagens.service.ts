import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personagem } from '../model/personagem';

@Injectable({
  providedIn: 'root'
})

export class InfoPersonagensService {

  API_URL_PERSONAGENS : string = "https://hp-api.herokuapp.com/api/characters"
  API_URL_ESTUDANTES : string = "https://hp-api.herokuapp.com/api/characters/students"
  API_URL_FUNCIONARIOS : string = "https://hp-api.herokuapp.com/api/characters/staff"
  API_URL_CASAS : string = "https://hp-api.herokuapp.com/api/characters/house/";

  constructor(private http : HttpClient) {}

  public buscarPersonagens(){
    return this.http.get<Personagem[]>(this.API_URL_PERSONAGENS).toPromise();
  }

  public buscarEstudantes(){
    return this.http.get<Personagem[]>(this.API_URL_ESTUDANTES).toPromise();
  }

  public buscarFuncionarios() {
    return this.http.get<Personagem[]>(this.API_URL_FUNCIONARIOS).toPromise();
  }

  public buscarCasas(casa : string){
    return this.http.get<Personagem[]>(this.API_URL_CASAS + casa).toPromise();
  }

}
