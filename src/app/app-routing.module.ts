import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadComponetDesignComponent } from './component-design/bad-componet-design/bad-componet-design.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { StrategyComponent } from './design-patterns/strategy/strategy.component';
import { InterceptorComponent } from './interceptors/interceptor/interceptor.component';
import { LazyComponent } from './lazy/lazy.component';
import { LoginComponent } from './login/login.component';
import { UnsubObservableOneComponent } from './unsub-obs/unsub-observable-one/unsub-observable-one.component';
import { WhenUseHigherOrderOpeartorsComponent } from './when-use-higher-order-opeartors/when-use-higher-order-opeartors/when-use-higher-order-opeartors.component';
import {  CanDeactivateCustomGuard, candeactivateGuard } from './guards/candeactivate.guard';
import {  GoodComponentDesignComponent } from './component-design/good-component-design/good-component-design.component';
import { ContainerComponent } from './component-design/good-component-design/container/container.component';
import { UnsubObservableTwoComponent } from './unsub-obs/unsub-observable-two/unsub-observable-two.component';
import { WrapperComponent } from './component-design/good-component-design/wrapper/wrapper.component';

export const routeslist: Routes = [

  {
    path: 'signals',
    loadComponent: () => import('./signals/signals.component').then(m => m.SignalsComponent)
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'bestps',
    loadChildren: () => import('./best-practices/best-practices.module').then(m => m.BestPracticesModule)
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate:[candeactivateGuard]
  },
  {
    path: 'interc',
    component: InterceptorComponent,
  },
  {
    path: 'bad/:id',
    component: BadComponetDesignComponent,
    canDeactivate:[candeactivateGuard]
  },
  {
    path: 'good/:id',
    component: GoodComponentDesignComponent,
    canDeactivate:[candeactivateGuard]
  },
  {
    path: 'unsub2',
    component: UnsubObservableTwoComponent,
    // canDeactivate:[candeactivateGuard]
  },
];
