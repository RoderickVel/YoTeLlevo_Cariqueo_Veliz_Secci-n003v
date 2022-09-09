import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegconductorPage } from './regconductor.page';

const routes: Routes = [
  {
    path: '',
    component: RegconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegconductorPageRoutingModule {}
