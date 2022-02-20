import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackHellComponent } from './callback-hell/callback-hell.component';



@NgModule({
  declarations: [
    CallbackHellComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CallbackHellComponent]
})
export class CallbackHellModule { }
