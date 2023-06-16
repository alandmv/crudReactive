import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {

  constructor() { }

  listaDePais:string[] = ["Colombia", "España", "Mexico", "Argentina", "Estados Unidos"];

  listarPaisesServices(){
    return this.listaDePais;
  }
}
