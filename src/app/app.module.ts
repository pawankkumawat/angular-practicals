import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import {  routeslist } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialModule } from './angular-material/all-material-module';
import { NgContainerModule } from './ng-container/ng-container.module';
import { WhenUseHigherOrderOpeartorsModule } from './when-use-higher-order-opeartors/when-use-higher-order-opeartors.module';
import { CallbackHellModule } from './callback-hell/callback-hell.module';
import { UnsubObsModule } from './unsub-obs/unsub-obs.module';
import { DesignPatternsModule } from './design-patterns/design-patterns.module';
import { BranchingModule } from './branching/branching.module';
import { MastersModule } from './masters/masters.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { SearchTypeAheadModule } from './search-type-ahead/search-type-ahead.module';
import { NoPreloading, PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
// import { ControlValueAccessorModule } from './control-value-accessor/control-value-accessor.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { InterceptorComponent } from './interceptors/interceptor/interceptor.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';





@NgModule({ declarations: [
        AppComponent,
        InterceptorComponent,
        LogoutComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        RouterModule.forRoot(routeslist, { preloadingStrategy: NoPreloading }),
        BrowserAnimationsModule,
        AllMaterialModule,
        NgContainerModule,
        WhenUseHigherOrderOpeartorsModule,
        CallbackHellModule,
        UnsubObsModule,
        // DashboardModule,
        DesignPatternsModule,
        BranchingModule,
        MastersModule,
        RxjsModule,
        SearchTypeAheadModule,
        // ControlValueAccessorModule,
        FormsModule,
        ReactiveFormsModule], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

