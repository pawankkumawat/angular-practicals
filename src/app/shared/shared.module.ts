import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { SharedC1Component } from './shared-c1/shared-c1.component';



@NgModule({
  declarations: [
    SharedC1Component
  ],
  imports: [
    CommonModule
  ],
  providers:[

  ],
  exports:[SharedC1Component]
})
export class SharedModule { }
