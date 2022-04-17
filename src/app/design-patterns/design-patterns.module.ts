import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyComponent } from './strategy/strategy.component';
import { RouterModule } from '@angular/router';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { BridgeComponent } from './bridge/bridge.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StrategyComponent, BridgeComponent],
  imports: [
    CommonModule,
    AllMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'strategy',
        component: StrategyComponent,
        data: { text: 'Strategy Pattern' },
      },
      {
        path: 'bridge',
        component: BridgeComponent,
        data: { text: 'Bridge Pattern' },
      },
    ]),
  ],
})
export class DesignPatternsModule {}
