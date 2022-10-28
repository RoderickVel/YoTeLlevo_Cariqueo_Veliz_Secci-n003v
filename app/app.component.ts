import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon:'happy',
      name:'Llevar',
      redirecTo:'/llevar'
    },
    {
      icon:'car-sport',
      name:'Viajar',
      redirecTo:'/viajar'
    },
    {
      icon:'map',
      name:'Tu Viaje',
      redirecTo:'/tu-viaje'
    },
    {
      icon:'time',
      name:'Historial',
      redirecTo:'/historial'
    },
    {
      icon:'book',
      name:'Mis Datos',
      redirecTo:'/mis-datos'
    },
  ]
}
