import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {  routeslist } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialModule } from './angular-material/all-material-module';
import { NgContainerModule } from './ng-container/ng-container.module';
import { WhenUseHigherOrderOpeartorsModule } from './when-use-higher-order-opeartors/when-use-higher-order-opeartors.module';
import { CallbackHellModule } from './callback-hell/callback-hell.module';
import { UnsubObsModule } from './unsub-obs/unsub-obs.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DesignPatternsModule } from './design-patterns/design-patterns.module';
import { BranchingModule } from './branching/branching.module';
import { MastersModule } from './masters/masters.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { SearchTypeAheadModule } from './search-type-ahead/search-type-ahead.module';
import { NoPreloading, PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { ControlValueAccessorModule } from './control-value-accessor/control-value-accessor.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { InterceptorComponent } from './interceptors/interceptor/interceptor.component';





@NgModule({
  declarations: [
    AppComponent,
    InterceptorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeslist,{preloadingStrategy:NoPreloading}),
    BrowserAnimationsModule,
    HttpClientModule,
    AllMaterialModule,
    NgContainerModule,
    WhenUseHigherOrderOpeartorsModule,
    CallbackHellModule,
    UnsubObsModule,
    DashboardModule,
    DesignPatternsModule,
    BranchingModule,
    MastersModule,
    RxjsModule,
    SearchTypeAheadModule,
    ControlValueAccessorModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

