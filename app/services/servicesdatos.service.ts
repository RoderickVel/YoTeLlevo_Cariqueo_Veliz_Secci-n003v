import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Datos{

  email: string,
  password:string,
  direccion:string,
  patente:string,
  marca:string,
  modelo:string,
  color:string,
  nombre:string,
  apellido:string,
  rut:string,
  sede:string

}

const ITEMS_KEY = 'my-datos';

@Injectable({
  providedIn: 'root'
})
export class ServicesdatosService {

  private _storage : Storage;

  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
    }

  async addDatos(dato:Datos):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
      if (datos) {
        datos.push(dato);
        return this.storage.set(ITEMS_KEY, datos);
      }else {
        return this.storage.set(ITEMS_KEY, [dato]);
      }
    })
  }

  getDatos(): Promise<Datos[]>{
    return this.storage.get(ITEMS_KEY);
  }

  async updateDatos(dato:Datos): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((datos:Datos[])=>{
      if (!datos || datos.length == 0){
        return null;
      }
      let newDato: Datos[] = [];
      for (let i of datos){
        if (i.rut === dato.rut){
          newDato.push(dato);
      }else {
        newDato.push(i);
      }
    }
    return this.storage.set(ITEMS_KEY,newDato);
    });
  }

  async deleteDatos(rut:string): Promise<Datos>{
    return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
      if (!datos || datos.length === 0){
        return null;
      }
      let toKeep: Datos[] = [];
      for (let i of datos){ 
        if (i.rut !== rut){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}

  