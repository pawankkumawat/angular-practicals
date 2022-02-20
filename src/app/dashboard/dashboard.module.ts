import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AllMaterialModule,
    FormsModule,
    RouterModule.forChild([])
  ]
})
export class DashboardModule { }
