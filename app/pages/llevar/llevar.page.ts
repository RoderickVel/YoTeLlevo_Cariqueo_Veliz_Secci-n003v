import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-llevar',
  templateUrl: './llevar.page.html',
  styleUrls: ['./llevar.page.scss'],
})
export class LlevarPage implements OnInit {

  constructor(private menuController: MenuController) {}

  ngOnInit() {
  }

  mostrarMenu(){
  this.menuController.open('first');
  }

}
