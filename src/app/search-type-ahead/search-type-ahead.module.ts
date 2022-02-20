import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCategoryComponent } from './search-category/search-category.component';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchCategoryComponent,
    SearchDialogComponent
  ],
  imports: [
    CommonModule,
    AllMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'sta',
        component: SearchDialogComponent
      }
    ])
  ]
})
export class SearchTypeAheadModule { }
