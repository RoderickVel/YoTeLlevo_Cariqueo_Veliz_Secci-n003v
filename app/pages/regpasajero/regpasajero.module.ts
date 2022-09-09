import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegpasajeroPageRoutingModule } from './regpasajero-routing.module';

import { RegpasajeroPage } from './regpasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegpasajeroPageRoutingModule
  ],
  declarations: [RegpasajeroPage]
})
export class RegpasajeroPageModule {}
