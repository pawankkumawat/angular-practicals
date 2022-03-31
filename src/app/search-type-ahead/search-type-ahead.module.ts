import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCategoryComponent } from './search-category/search-category.component';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StatePipe } from './state.pipe';



@NgModule({
  declarations: [
    SearchCategoryComponent,
    SearchDialogComponent,
    StatePipe
  ],
  imports: [
    CommonModule,
    AllMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'sta',
        component: SearchCategoryComponent
      },
      {
        path: 'stan',
        component: SearchDialogComponent
      },
    ])
  ]
})
export class SearchTypeAheadModule { }
