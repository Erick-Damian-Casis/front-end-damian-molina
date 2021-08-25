import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//-------->  Components
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { DriverComponent } from './driver/driver.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';

//-------->  Prime NG
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from "primeng/InputSwitch";
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    AccessDeniedComponent,
    UnderMaintenanceComponent,
    NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    InputSwitchModule,
    ReactiveFormsModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
