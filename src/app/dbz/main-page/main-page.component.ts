import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personaje: Personaje[] = [
    {nombre: 'Goku', poder: 15000},
    {nombre: 'Vegeta', poder: 14000}
  ];

  nuevo: Personaje ={
    nombre: '',
    poder: 0
  }

  agregar(){

    if(this.nuevo.nombre.trim().length == 0){return;}

    this.personaje.push(this.nuevo);

    this.nuevo ={
      nombre: '',
      poder: 0
    }

  }

}
