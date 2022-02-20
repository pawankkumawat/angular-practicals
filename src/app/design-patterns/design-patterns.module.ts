import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyComponent } from './strategy/strategy.component';
import { RouterModule } from '@angular/router';
import { AllMaterialModule } from '../angular-material/all-material-module';

@NgModule({
  declarations: [StrategyComponent],
  imports: [
    CommonModule,
    AllMaterialModule,
    RouterModule.forChild([
      {
        path: 'strategy',
        component: StrategyComponent,
        data: { text: 'Strategy Pattern' },
      },
    ]),
  ],
})
export class DesignPatternsModule {}
