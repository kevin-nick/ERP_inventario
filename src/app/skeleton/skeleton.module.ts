import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonRoutingModule } from './skeleton-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './components/header/header.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogsComponent } from './components/logs/logs.component';

@NgModule({
  declarations: [
    HeaderComponent,
    EmpleadosComponent,
    DashboardComponent,
    LogsComponent
  ],
  imports: [
    CommonModule,
    SkeletonRoutingModule,
     // * MATERIAL IMPORTS
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    CommonModule,
    MatExpansionModule,
    NgbModule,
    // * DATATABLE IMPORTS
    DataTablesModule,
    ReactiveFormsModule,
  ]
})
export class SkeletonModule { }
