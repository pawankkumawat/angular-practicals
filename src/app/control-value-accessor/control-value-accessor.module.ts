import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalComponent } from './approval/approval.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignatureComponent } from './signature/signature.component';



@NgModule({
  imports: [
    ApprovalComponent,
    SignatureComponent,
    CommonModule,
    AllMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: ApprovalComponent
    }])
  ]
})
export class ControlValueAccessorModule { }