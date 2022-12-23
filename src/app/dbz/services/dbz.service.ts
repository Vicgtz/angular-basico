import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()

export class dbzService{

    private _personaje: Personaje[] = [
        {nombre: 'Goku', poder: 15000},
        {nombre: 'Vegeta', poder: 14000}
      ];

      get personaje(): Personaje[]{
        return [...this._personaje];
      }

      constructor(){

      }

      agregarPersonaje(persona:Personaje ){
        this._personaje.push(persona);
      }


}
