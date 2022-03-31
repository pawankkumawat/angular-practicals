import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule } from '@angular/router';
import { DependencyInjectionModule } from '../dependency-injection/dependency-injection.module';



@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'lazy',
      component: LazyComponent,
    },]),
    DependencyInjectionModule
  ]
})
export class LazyModule { }
