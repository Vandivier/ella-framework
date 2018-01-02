import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [{
    'component': AboutComponent,
    'path': 'about',
}, {
    'component': HomeComponent,
    'path': '',
}, {
    'component': ContactUsComponent,
    'path': 'contact-us',
}, {
    'component': DashboardComponent,
    'path': 'dashboard',
}, {
    'component': SignInComponent,
    'path': 'sign-in',
}, {
    'redirectTo': '',
    'path': '**',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
