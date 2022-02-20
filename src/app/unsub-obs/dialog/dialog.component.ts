import { Component, } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent{
  data$!: Observable<string>;
  constructor(
    private _snackBar: MatSnackBar,
    private service: DataService
  ) {}
  ngOnInit(): void {
    this.data$= this.service.getDataFromAPI()
                 .pipe(tap((response) => this.openSnackBar()))
                
  }


  openSnackBar() {
    this._snackBar.open('Success', '', {
      duration: 5000,
    });
  }
 
}

