import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
// modulos
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // modulo de rutas
    ComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }
