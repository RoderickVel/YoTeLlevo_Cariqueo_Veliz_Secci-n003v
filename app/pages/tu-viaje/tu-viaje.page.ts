import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tu-viaje',
  templateUrl: './tu-viaje.page.html',
  styleUrls: ['./tu-viaje.page.scss'],
})
export class TuViajePage implements OnInit {

  constructor(private menuController: MenuController) {}

  ngOnInit() {
  }

  mostrarMenu(){
  this.menuController.open('first');
  }

}
