import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackHellComponent } from './callback-hell/callback-hell.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CallbackHellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'cbh',
        component: CallbackHellComponent,
      },
    ]),
  ],
  exports: [CallbackHellComponent],
})
export class CallbackHellModule {}
