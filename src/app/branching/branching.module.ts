import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchingComponent } from './branching/branching.component';
import { RouterModule } from '@angular/router';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { BranchingTwoComponent } from './branching-two/branching-two.component';

@NgModule({
  declarations: [BranchingComponent, BranchingTwoComponent],
  imports: [
    CommonModule,
    AllMaterialModule,
    RouterModule.forChild([
      {
        path: 'branching',
        component: BranchingComponent,
      },
      {
        path: 'branching2',
        component: BranchingTwoComponent,
      },
    ]),
  ],
})
export class BranchingModule {}
