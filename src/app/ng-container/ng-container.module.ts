import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContainerExampleComponent } from './ng-container-example/ng-container-example.component';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgContainerExampleComponent,
    NgContainerComponent
  ],
  imports: [
    CommonModule,
    AllMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NgContainerExampleComponent,
    NgContainerComponent
    ]
})
export class NgContainerModule { }
