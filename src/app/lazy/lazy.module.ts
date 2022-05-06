import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule } from '@angular/router';
import { DependencyInjectionModule } from '../dependency-injection/dependency-injection.module';
import { UserService } from '../services/user.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: LazyComponent,
    },]),
    SharedModule,
    DependencyInjectionModule,
  ]
})
export class LazyModule { }
