import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhenUseHigherOrderOpeartorsComponent } from './when-use-higher-order-opeartors/when-use-higher-order-opeartors.component';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WhenUseHigherOrderOpeartorsComponent],
  imports: [
    CommonModule,
    AllMaterialModule,
    FormsModule,
    RouterModule.forChild([  {
      path: 'higherops',
      component: WhenUseHigherOrderOpeartorsComponent,
    },]),
  ],
  exports: [WhenUseHigherOrderOpeartorsComponent],
})
export class WhenUseHigherOrderOpeartorsModule {}
