import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
//   {
//     path: '',
//     loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
//   },

//   {
//     path: 'home',
//     component: HomeComponent,
//     data: {title: 'Accueil'}
//   },
//   {
//     path: 'loan',
//     component: LoanComponent,
//     data: {title: 'Capacité d\'emprunt'}
//   },
//   {
//     path: 'monthly-payment',
//     component: MonthlyPaymentComponent,
//     data: {title: 'Calcul de mensualité'}
//   },
//   {
//     path: 'real-estate-search',
//     component: RealEstateSearchComponent,
//     data: {title: 'Rechercher immobilière'}
//   },
//   {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true, relativeLinkResolution: 'legacy' } // <-- debugging purposes only
 // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
