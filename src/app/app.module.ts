import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { ServiceArticlesService } from './service-articles/service-articles.service';
import { ServiceBaseService } from './service-base/service-base.service';
import { ServiceUrlManagerService } from './service-url-manager/service-url-manager.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    DashboardComponent,
    ContactUsComponent,
    SignInComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceArticlesService,
              ServiceBaseService,
              ServiceUrlManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
