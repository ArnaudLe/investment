import { HeaderModule } from './../../features/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule, HeaderModule
  ]
})
export class HomePageModule { }
