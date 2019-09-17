import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';

import { SidebarService } from './services/sidebar.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

import { ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectComponent } from './project/project.component';
import { ResourceComponent } from './resource/resource.component';
import { LoginComponent } from './login/login/login.component';

import { AppRoutingModule } from './app.routes';
import { FormulaComponent } from './formula/formula.component';
import { TemplateComponent } from './template/template.component';


import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';   
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProjectComponent,
    ResourceComponent,
    LoginComponent,
    FormulaComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    AppRoutingModule,
        MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    ReactiveFormsModule,

    TableModule,
    ToolbarModule



  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
