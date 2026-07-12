import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { AllMaterialModule } from 'src/app/angular-material/all-material-module';

@Component({
    selector: 'app-confirm',
    imports: [AllMaterialModule],
    templateUrl: './confirm.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './confirm.component.scss'
})
export class ConfirmComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmComponent>) {}
}
