import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './coutry/coutry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AllMaterialModule,
    RouterModule.forChild([
      { path: 'country/:id', component: CountryComponent },
    ]),
  ]
})
export class MastersModule { }
