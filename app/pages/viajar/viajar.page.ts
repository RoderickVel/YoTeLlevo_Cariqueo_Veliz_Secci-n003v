import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-viajar',
  templateUrl: './viajar.page.html',
  styleUrls: ['./viajar.page.scss'],
})
export class ViajarPage implements OnInit {

  constructor(private menuController: MenuController) {}

  ngOnInit() {
  }

  mostrarMenu(){
  this.menuController.open('first');
  }

}
