import { Component } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-async-pipe-usecase-one',
  templateUrl: './async-pipe-usecase-one.component.html',
  styles: [],
})
export class AsyncPipeUsecaseOneComponent {
 
  constructor(
    public dialog: MatDialog,
    ) {}
 
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe();
  }

 
}


