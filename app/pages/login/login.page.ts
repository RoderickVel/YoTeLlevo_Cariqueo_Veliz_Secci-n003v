import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
  email:'',
  password:''
  }

  constructor(private menuController: MenuController) {}

  ngOnInit() {
  }

  mostrarMenu(){
  this.menuController.open('first');
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
