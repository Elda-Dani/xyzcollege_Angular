import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';


const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"adds",component:AddstudentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
    AddstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
