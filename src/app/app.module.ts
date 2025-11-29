import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoPreloading, RouterModule } from '@angular/router';
import { AllMaterialModule } from './angular-material/all-material-module';
import { routeslist } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchingModule } from './branching/branching.module';
import { CallbackHellModule } from './callback-hell/callback-hell.module';
import { DesignPatternsModule } from './design-patterns/design-patterns.module';
import { MastersModule } from './masters/masters.module';
import { NgContainerModule } from './ng-container/ng-container.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { SearchTypeAheadModule } from './search-type-ahead/search-type-ahead.module';
import { UnsubObsModule } from './unsub-obs/unsub-obs.module';
import { WhenUseHigherOrderOpeartorsModule } from './when-use-higher-order-opeartors/when-use-higher-order-opeartors.module';
import { ControlValueAccessorModule } from './control-value-accessor/control-value-accessor.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { InterceptorComponent } from './interceptors/interceptor/interceptor.component';
import { LogoutComponent } from './logout/logout.component';
import { TreeNestedChildAccessorOverviewExample } from './shared/tree.component';

@NgModule({ declarations: [
        AppComponent,
        InterceptorComponent,
        LogoutComponent,
        
    ],
    bootstrap: [AppComponent], imports: [
        BrowserModule,
        RouterModule.forRoot(routeslist, { preloadingStrategy: NoPreloading }),
        BrowserAnimationsModule,
        AllMaterialModule,
        NgContainerModule,
        WhenUseHigherOrderOpeartorsModule,
        CallbackHellModule,
        UnsubObsModule,
        DesignPatternsModule,
        BranchingModule,
        MastersModule,
        RxjsModule,
        SearchTypeAheadModule,
        FormsModule,
        TreeNestedChildAccessorOverviewExample,
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

