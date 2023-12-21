import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from './confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(): MatDialogRef<ConfirmComponent, any> {
    const dialogref = this.dialog.open(ConfirmComponent, {
      width: '250px',
      disableClose:true
    });
    return dialogref
  }
}
