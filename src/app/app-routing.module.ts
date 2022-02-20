import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { StrategyComponent } from './design-patterns/strategy/strategy.component';
import { UnsubObservableOneComponent } from './unsub-obs/unsub-observable-one/unsub-observable-one.component';
import { WhenUseHigherOrderOpeartorsComponent } from './when-use-higher-order-opeartors/when-use-higher-order-opeartors/when-use-higher-order-opeartors.component';

export const routeslist: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    component: DashboardComponent,
  },
];
