import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { MonthlyPaymentComponent } from './monthly-payment/monthly-payment.component';
import { RealEstateSearchComponent } from './real-estate-search/real-estate-search.component';

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
    BrowserModule, RouterModule.forRoot(appRouteList)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
