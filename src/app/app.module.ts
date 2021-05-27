import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { LoanComponent } from './features/loan/loan.component';
import { MonthlyPaymentComponent } from './features/monthly-payment/monthly-payment.component';
import { RealEstateSearchComponent } from './features/real-estate-search/real-estate-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

export const appRouteList: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'loan',
      component: LoanComponent
  },
  {
    path: 'monthly-payment',
    component: MonthlyPaymentComponent
  },
  {
    path: 'real-estate-search',
    component: RealEstateSearchComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: 'landing'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoanComponent,
    MonthlyPaymentComponent,
    RealEstateSearchComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRouteList),
     BrowserAnimationsModule, MatTabsModule, MatButtonToggleModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
