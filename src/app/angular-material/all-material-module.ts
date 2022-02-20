import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule ({
  imports: [
    MatSliderModule,
    MatTableModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports:[
    MatSliderModule,
    MatTableModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class AllMaterialModule {}
