import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyComponent } from './strategy/strategy.component';
import { RouterModule } from '@angular/router';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { BridgeComponent } from './bridge/bridge.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Content1Component } from './bridge/content1/content1.component';
import { Content2Component } from './bridge/content2/content2.component';

@NgModule({
  declarations: [StrategyComponent, BridgeComponent, Content1Component, Content2Component],
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
