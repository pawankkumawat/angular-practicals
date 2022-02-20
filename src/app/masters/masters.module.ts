import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AllMaterialModule,
    RouterModule.forChild([
      { path: 'category', component: GroupComponent },
    ]),
  ]
})
export class MastersModule { }
