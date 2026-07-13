import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContainerExampleComponent } from './ng-container-example/ng-container-example.component';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NgContainerExampleComponent,
    NgContainerComponent
  ],
  imports: [
    CommonModule,
    AllMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'ngc',
        children: [
          {
            path: 'example',
            component: NgContainerExampleComponent,
            data: { text: 'Ng Container Example' },
          },
        ],
      },
    ]),
  ],
  exports:[
    NgContainerExampleComponent,
    NgContainerComponent
    ]
})
export class NgContainerModule { }
