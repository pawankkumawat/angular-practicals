import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { StrategyComponent } from './design-patterns/strategy/strategy.component';
import { LazyComponent } from './lazy/lazy.component';
import { UnsubObservableOneComponent } from './unsub-obs/unsub-observable-one/unsub-observable-one.component';
import { WhenUseHigherOrderOpeartorsComponent } from './when-use-higher-order-opeartors/when-use-higher-order-opeartors/when-use-higher-order-opeartors.component';

export const routeslist: Routes = [

  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    component: DashboardComponent,
  },
];
