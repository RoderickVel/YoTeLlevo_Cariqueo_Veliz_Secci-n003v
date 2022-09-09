import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'yo-te-llevo',
    loadChildren: () => import('./pages/yo-te-llevo/yo-te-llevo.module').then( m => m.YoTeLlevoPageModule)
  },
  {
    path: '',
    redirectTo: 'yo-te-llevo',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'viajar',
    loadChildren: () => import('./pages/viajar/viajar.module').then( m => m.ViajarPageModule)
  },
  {
    path: 'llevar',
    loadChildren: () => import('./pages/llevar/llevar.module').then( m => m.LlevarPageModule)
  },
  {
    path: 'tu-viaje',
    loadChildren: () => import('./pages/tu-viaje/tu-viaje.module').then( m => m.TuViajePageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'regpasajero',
    loadChildren: () => import('./pages/regpasajero/regpasajero.module').then( m => m.RegpasajeroPageModule)
  },
  {
    path: 'regconductor',
    loadChildren: () => import('./pages/regconductor/regconductor.module').then( m => m.RegconductorPageModule)
  },
  {
    path: 'regambos',
    loadChildren: () => import('./pages/regambos/regambos.module').then( m => m.RegambosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
