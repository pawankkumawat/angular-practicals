import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-search-dialog',
    templateUrl: './search-dialog.component.html',
    styles: [],
    standalone: false
})
export class SearchDialogComponent implements OnInit {
  @ViewChild('search', { static: true }) search!: ElementRef;
  States!: any[];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    fromEvent(this.search.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1000),
        switchMap((searchText: string) => this.dataService.getData(searchText))
      )
      .subscribe((res) => {
        this.States = res;
        console.log(res)
      });
  }

}


