import { ApplicationRef, enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableDebugTools } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, { applicationProviders: [provideZoneChangeDetection()], }).then((module)=>enableDebugTools(module.injector.get(ApplicationRef).components[0]))
  .catch(err => console.error(err));

  // ng.profiler.timeChangeDetection({record:true})
