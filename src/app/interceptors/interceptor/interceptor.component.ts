import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styles: [
  ]
})
export class InterceptorComponent implements OnInit {
  
  data$!: Observable<string>;
  constructor(
    private snackbarService: SnackbarService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.data$= this.dataService.getDataFromAPI()
                 .pipe(tap((response) => this.snackbarService.openSnackBar()))
  }

}
