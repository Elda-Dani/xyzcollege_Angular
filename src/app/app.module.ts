import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewallstudentsComponent } from './viewallstudents/viewallstudents.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { ViewfacultyComponent } from './viewfaculty/viewfaculty.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"adds",component:AddstudentComponent
  },
  {
    path:"views",component:ViewallstudentsComponent
  },
  {
    path:"addf",component:AddfacultyComponent
  },
  {
    path:"viewf",component:ViewfacultyComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
    AddstudentComponent,
    ViewallstudentsComponent,
    AddfacultyComponent,
    ViewfacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
