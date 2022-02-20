import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectBehaviorSubjectComponent } from './subject-behavior-subject/subject-behavior-subject.component';
import { RouterModule } from '@angular/router';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';



@NgModule({
  declarations: [
    SubjectBehaviorSubjectComponent,
    C1Component,
    C2Component
  ],
  imports: [
    CommonModule,
    AllMaterialModule,
    RouterModule.forChild([
      {
        path: 'rxjs', component: SubjectBehaviorSubjectComponent
      },
      {
        path: 'rxjs/c1', component: C1Component
      },
      {
        path: 'rxjs/c2', component: C2Component
      },
    ])
  ]
})
export class RxjsModule { }
