import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component'; 
import { LoanComponent } from './features/loan/loan.component';
import { MonthlyPaymentComponent } from './features/monthly-payment/monthly-payment.component';
import { RealEstateSearchComponent } from './features/real-estate-search/real-estate-search.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {title: 'Accueil'}
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Accueil'}
  },
  {
    path: 'loan',
    component: LoanComponent,
    data: {title: 'Capacité d\'emprunt'}
  },
  {
    path: 'monthly-payment',
    component: MonthlyPaymentComponent,
    data: {title: 'Calcul de mensualité'}
  },
  {
    path: 'real-estate-search',
    component: RealEstateSearchComponent,
    data: {title: 'Rechercher immobilière'}
  },
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
