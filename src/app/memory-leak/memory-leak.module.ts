import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMemoryLeakComponent } from './create-memory-leak/create-memory-leak.component';



@NgModule({
  declarations: [
    CreateMemoryLeakComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MemoryLeakModule { }
