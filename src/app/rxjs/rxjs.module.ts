import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectBehaviorSubjectComponent } from './subject-behavior-subject/subject-behavior-subject.component';
import { RouterModule } from '@angular/router';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MergemapComponent } from './mergemap/mergemap.component';
import { AutoRefreshTimerComponent } from './auto-refresh-timer/auto-refresh-timer.component';



@NgModule({
  declarations: [
    SubjectBehaviorSubjectComponent,
    C1Component,
    C2Component,
    ForkjoinComponent,
    MergemapComponent,
    AutoRefreshTimerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
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
      {
        path: 'rxjs/fj', component: ForkjoinComponent
      },
      {
        path: 'rxjs/merge', component: MergemapComponent
      },
      {
        path: 'rxjs/autimer', component: AutoRefreshTimerComponent
      },
    ])
  ]
})
export class RxjsModule { }
