import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-regpasajero',
  templateUrl: './regpasajero.page.html',
  styleUrls: ['./regpasajero.page.scss'],
})
export class RegpasajeroPage implements OnInit {

  pasajero = {
    email:'',
    password:'',
    direccion:'',
    nombre:'',
    apellido:'',
    rut:'',
    sede:''
    }

    constructor(private menuController: MenuController) { }

    mostrarMenu(){
      this.menuController.open('first');
      }
  
    ngOnInit() {
    }
  
    onSubmit(){
      console.log('submit');
      console.log(this.pasajero);
    }
  }
