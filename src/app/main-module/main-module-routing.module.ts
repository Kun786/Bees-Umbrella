import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { AboutUsComponent } from './MainComponent/about-us/about-us.component';
import { ContactUsComponent } from './MainComponent/contact-us/contact-us.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { ServicesComponent } from './MainComponent/services/services.component';

const routes: Routes = [{ path: '', component: MainModuleComponent ,children:[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'service',component:ServicesComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about',component:AboutUsComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
