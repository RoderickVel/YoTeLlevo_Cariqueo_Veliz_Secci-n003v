import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-llevar',
  templateUrl: './llevar.page.html',
  styleUrls: ['./llevar.page.scss'],
})
export class LlevarPage implements OnInit {

  constructor(private menuController: MenuController,
              private navController: NavController) {}

  ngOnInit() {
  }

  mostrarMenu(){
  this.menuController.open('first');
  }

  async logout(){
    console.log('loggedout');
    if (localStorage.getItem('ingresadoA')){
      localStorage.removeItem('ingresadoA')
    }else {
      localStorage.removeItem('ingresadoB')
    };
    this.navController.navigateRoot('login');
  }
}
