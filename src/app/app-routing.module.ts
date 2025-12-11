import { Routes } from '@angular/router';
import { BadComponetDesignComponent } from './component-design/bad-componet-design/bad-componet-design.component';
import { CustomerFooterComponent } from './component-design/customer-footer/customer-footer.component';
import { GoodComponentDesignComponent } from './component-design/good-component-design/good-component-design.component';
import { VehicleFooterComponent } from './component-design/vehicle-footer/vehicle-footer.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { candeactivateGuard } from './guards/candeactivate.guard';
import { InterceptorComponent } from './interceptors/interceptor/interceptor.component';
import { LoginComponent } from './login/login.component';
import { UnsubObservableTwoComponent } from './unsub-obs/unsub-observable-two/unsub-observable-two.component';

export const routeslist: Routes = [

  {
    path: 'signals',
    loadComponent: () => import('./signals/signals.component').then(m => m.SignalsComponent)
  },
  {
    path: 'cva',
    loadChildren: () => import('./control-value-accessor/control-value-accessor.module').then(m => m.ControlValueAccessorModule)
  },
  {
    path: 'orders',
    loadComponent: () => import('./order-list/order-list.component').then(m => m.OrderListComponent)
  },
  {
    path: 'perf1',
    loadComponent: () => import('./performance/performance.component').then(m => m.PerformanceComponent)
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
    path: 'custfoot',
    component: CustomerFooterComponent,
    canDeactivate:[candeactivateGuard]
  },
  {
    path: 'vehclefoot',
    component: VehicleFooterComponent,
    canDeactivate:[candeactivateGuard]
  },
  {
    path: 'unsub2',
    component: UnsubObservableTwoComponent,
    // canDeactivate:[candeactivateGuard]
  },
  {
    path: 'dps',
    loadChildren() {
      return import('./design-patterns/design-patterns.module').then(m => m.DesignPatternsModule)
    },
  },
  {
    path: 'highcard',
    loadComponent:() => import('./highcard/highcard.component').then(m => m.default)
  },
];
