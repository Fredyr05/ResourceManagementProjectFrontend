import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';

import { SidebarService } from './services/sidebar.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectComponent } from './project/project.component';
import { ResourceComponent } from './resource/resource.component';
import { LoginComponent } from './login/login/login.component';

import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProjectComponent,
    ResourceComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
