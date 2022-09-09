import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-regconductor',
  templateUrl: './regconductor.page.html',
  styleUrls: ['./regconductor.page.scss'],
})
export class RegconductorPage implements OnInit {

  conductor = {
    email:'',
    password:'',
    direccion:'',
    patente:'',
    marca:'',
    modelo:'',
    color:'',
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
      console.log(this.conductor);
    }
  }
