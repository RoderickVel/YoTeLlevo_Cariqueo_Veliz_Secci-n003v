import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, MenuController, Platform, ToastController } from '@ionic/angular';
import { ServicesdatosService, Datos } from '../../services/servicesdatos.service';

@Component({
  selector: 'app-regambos',
  templateUrl: './regambos.page.html',
  styleUrls: ['./regambos.page.scss'],
})
export class RegambosPage implements OnInit {

  datos: Datos[] = [];
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList;

  constructor(private menuController: MenuController,
              private storageService: ServicesdatosService,
              private plt: Platform,
              private toastController: ToastController) {
                this.plt.ready().then(()=>{
                  this.loadDatos();
                });
               }

  mostrarMenu(){
    this.menuController.open('first');
    }

  ngOnInit() {
  }

  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

  addDatos(){
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('Datos Agregados!');
      this.loadDatos();
    })
  }

  updateDatos(dato: Datos){
    dato.nombre = `UPDATED: ${dato.nombre}`;
    dato.apellido = `UPDATED: ${dato.apellido}`;
    dato.direccion = `UPDATED: ${dato.direccion}`;
    dato.email = `UPDATED: ${dato.email}`;
    dato.sede = `UPDATED: ${dato.sede}`;
    dato.marca = `UPDATED: ${dato.marca}`;
    dato.modelo = `UPDATED: ${dato.modelo}`;
    dato.patente = `UPDATED: ${dato.patente}`;
    dato.color = `UPDATED: ${dato.color}`;
    dato.password = `UPDATED: ${dato.password}`;
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  deleteDatos(dato: Datos){
    this.storageService.deleteDatos(dato.rut).then(item=>{
      this.showToast('Elemento Eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  onSubmit(){
    console.log('submit');
    console.log(this.datos);
  }
}
