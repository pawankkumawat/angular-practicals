import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule } from '@angular/router';
import { DependencyInjectionModule } from '../dependency-injection/dependency-injection.module';
import { UserService } from '../services/user.service';
import { SharedC1Component } from '../shared/shared-c1/shared-c1.component';



@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: LazyComponent,
    },]),
    SharedC1Component,
    DependencyInjectionModule,
  ]
})
export class LazyModule { }
