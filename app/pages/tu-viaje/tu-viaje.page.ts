import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { UbicacionService } from '../../services/ubicacion.service';
import { Data } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tu-viaje',
  templateUrl: './tu-viaje.page.html',
  styleUrls: ['./tu-viaje.page.scss'],
})


export class TuViajePage implements OnInit {

  ubicacion: Data[] = [];

  constructor(private menuController: MenuController,
              private ubicacionService: UbicacionService,
              private navController: NavController) {}

  ngOnInit() {

    this.ubicacionService.getLocation().subscribe(resp=>{
      console.log('Ubicacion', resp);
      this.ubicacion.push(...resp.data);
    });
  
  }

  mostrarMenu(){
  this.menuController.open('first');
  }

  async logout(){
    console.log('loggedout');
    localStorage.removeItem('ingresado')
    this.navController.navigateRoot('login');
  }
}
