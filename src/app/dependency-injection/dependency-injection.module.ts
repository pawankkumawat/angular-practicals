import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TightlyCoupledComponent } from './tightly-coupled/tightly-coupled.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { DiLandingComponent } from './di-landing/di-landing.component';
import { WhatsDiComponent } from './whats-di/whats-di.component';

@NgModule({
  declarations: [TightlyCoupledComponent, C1Component, C2Component, DiLandingComponent, WhatsDiComponent],
  imports: [
    CommonModule,
    AllMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'di', component: DiLandingComponent },
      { path: 'di/c1', component: C1Component },
      { path: 'di/c2', component: C2Component },
      { path: 'di/wdi', component: WhatsDiComponent },
    ]),
  ],
  
})
export class DependencyInjectionModule {}
