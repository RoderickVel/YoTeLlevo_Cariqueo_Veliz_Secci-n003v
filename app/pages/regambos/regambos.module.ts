import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegambosPageRoutingModule } from './regambos-routing.module';

import { RegambosPage } from './regambos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegambosPageRoutingModule
  ],
  declarations: [RegambosPage]
})
export class RegambosPageModule {}
