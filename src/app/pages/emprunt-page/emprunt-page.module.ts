import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpruntPageRoutingModule } from './emprunt-page-routing.module';
import { EmpruntPageComponent } from './emprunt-page.component';


@NgModule({
  declarations: [
    EmpruntPageComponent
  ],
  imports: [
    CommonModule,
    EmpruntPageRoutingModule
  ]
})
export class EmpruntPageModule { }
