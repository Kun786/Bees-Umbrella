import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { ServicesComponent } from './MainComponent/services/services.component';
import { ContactUsComponent } from './MainComponent/contact-us/contact-us.component';
import { AboutUsComponent } from './MainComponent/about-us/about-us.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { FooterComponent } from './MainComponent/footer/footer.component';
import { HeaderComponent } from './MainComponent/header/header.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
