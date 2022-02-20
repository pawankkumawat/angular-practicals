import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsubObservableOneComponent } from './unsub-observable-one/unsub-observable-one.component';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AsyncPipeUsecaseOneComponent} from './async-pipe-usecase-one/async-pipe-usecase-one.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [UnsubObservableOneComponent, AsyncPipeUsecaseOneComponent,DialogComponent],
  imports: [
    CommonModule,
    AllMaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'unsub',
        component: UnsubObservableOneComponent,
      },
      {
        path: 'asyncuc1',
        component: AsyncPipeUsecaseOneComponent,
      },
    ]),
  ],
  exports: [UnsubObservableOneComponent],
})
export class UnsubObsModule {}
