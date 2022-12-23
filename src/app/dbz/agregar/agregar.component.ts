import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {


  nuevo: Personaje = {nombre: '', poder: 0}
  
  constructor(private dbzSer:dbzService){

  }

  agregar(){

    if(this.nuevo.nombre.trim().length == 0){return;}

    this.dbzSer.agregarPersonaje(this.nuevo);    

    this.nuevo ={
      nombre: '',
      poder: 0
    }

  }

}
