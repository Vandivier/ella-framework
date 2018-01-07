import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { FormsModule } from '@angular/forms';

import { ServiceArticlesService } from './service-articles/service-articles.service';

import { ClientComponent } from './client.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    ClientComponent,
    AboutComponent,
    HomeComponent,
    DashboardComponent,
    ContactUsComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    ClientRoutingModule,
    FormsModule
  ],
  providers: [ServiceArticlesService],
  bootstrap: [ClientComponent]
})
export class ClientModule { }
