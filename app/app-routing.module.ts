import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoAGuard } from './ingresado-a.guard';
import { IngresadoBGuard } from './ingresado-b.guard';

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
    path: 'viajar',
    loadChildren: () => import('./pages/viajar/viajar.module').then( m => m.ViajarPageModule), canActivate: [IngresadoBGuard ,IngresadoAGuard] 
  },
  {
    path: 'llevar',
    loadChildren: () => import('./pages/llevar/llevar.module').then( m => m.LlevarPageModule), canActivate: [IngresadoAGuard]
  },
  {
    path: 'tu-viaje',
    loadChildren: () => import('./pages/tu-viaje/tu-viaje.module').then( m => m.TuViajePageModule), canActivate: [IngresadoBGuard, IngresadoAGuard] 
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then( m => m.HistorialPageModule), canActivate: [IngresadoBGuard, IngresadoAGuard] 
  },
  {
    path: 'mis-datos',
    loadChildren: () => import('./pages/mis-datos/mis-datos.module').then( m => m.MisDatosPageModule), canActivate: [IngresadoBGuard, IngresadoAGuard] 
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule), canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule), canActivate: [NoIngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
