import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectOnServiceComponent } from './subject-on-service/subject-on-service.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SubjectOnServiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SubjectOnServiceComponent,
      },
    ]),
  ],
})
export class BestPracticesModule {}
