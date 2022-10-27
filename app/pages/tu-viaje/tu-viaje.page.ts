import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
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
              private ubicacionService: UbicacionService) {}

  ngOnInit() {

    this.ubicacionService.getLocation().subscribe(resp=>{
      console.log('Ubicacion', resp);
      this.ubicacion.push(...resp.data);
    });
  
  }

  mostrarMenu(){
  this.menuController.open('first');
  }

}
