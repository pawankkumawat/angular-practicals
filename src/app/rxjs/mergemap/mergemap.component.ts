import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-mergemap',
    templateUrl: './mergemap.component.html',
    styles: [],
    standalone: false
})
export class MergemapComponent implements OnInit {

  images$!: Observable<string[]>;
  // unsub$ = new Subject<void>();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.images$ = this.dataService.getRapidAllImages().pipe(
      map((resp:any)=>resp)
    )
  }

}
