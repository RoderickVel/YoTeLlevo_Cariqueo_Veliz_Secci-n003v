import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-regambos',
  templateUrl: './regambos.page.html',
  styleUrls: ['./regambos.page.scss'],
})
export class RegambosPage implements OnInit {

  ambos = {
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
    console.log(this.ambos);
  }
}
