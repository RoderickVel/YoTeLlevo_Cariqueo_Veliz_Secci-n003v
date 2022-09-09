import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegconductorPageRoutingModule } from './regconductor-routing.module';

import { RegconductorPage } from './regconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegconductorPageRoutingModule
  ],
  declarations: [RegconductorPage]
})
export class RegconductorPageModule {}
