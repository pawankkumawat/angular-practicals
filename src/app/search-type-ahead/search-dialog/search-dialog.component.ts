import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { fromEvent, Observable, of } from 'rxjs';
import { filter, map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styles: [
  ]
})
export class SearchDialogComponent implements OnInit {

  @ViewChild('search', { static: true, read: ElementRef }) search!: ElementRef;
  constructor() { }
  // states$: Observable<State[]> = of(STATES);
  states: State[] = STATES;
  data$!:Observable<State[]>;
  ngOnInit(): void {

  this.data$=  fromEvent(this.search.nativeElement, 'input').pipe(
      map((event: any) => event.target.value),
      tap(value => {
        console.log(value);
        
      }),
        map((value: string) => {
          // console.log('map', value)
          let sts = this.states.filter(state => state.text.toLowerCase().includes(value.toLowerCase()))
          console.log(sts);
          return sts;
          // return this.states;
        }),
        startWith(this.states)
      )

    // .subscribe();

  }



}

export interface State {
  id: number,
  text: string
}

export const STATES: State[] = [
  { id: 1, text: 'Andhra Pradesh' },
  { id: 2, text: 'Arunachal Pradesh' },
  { id: 3, text: 'Assam' },
  { id: 4, text: 'Bihar' },
  { id: 5, text: 'Chhattisgarh' },
  { id: 6, text: 'Goa' },
  { id: 7, text: 'Gujarat' },
  { id: 8, text: 'Haryana' },
  { id: 9, text: 'Himachal Pradesh' },
  { id: 10, text: 'Jharkhand' },
  { id: 11, text: 'Karnataka' },
  { id: 12, text: 'Kerala' },
  { id: 13, text: 'Madhya Pradesh' },
  { id: 14, text: 'Maharashtra' },
  { id: 15, text: 'Manipur' },
  { id: 16, text: 'Meghalaya' },
  { id: 17, text: 'Mizoram' },
  { id: 18, text: 'Nagaland' },
  { id: 19, text: 'Odisha' },
  { id: 20, text: 'Punjab' },
  { id: 21, text: 'Rajasthan' },
  { id: 22, text: 'Sikkim' },
  { id: 23, text: 'Tamil Nadu' },
  { id: 24, text: 'Telangana' },
  { id: 25, text: 'Tripura' },
  { id: 26, text: 'Uttarakhand' },
  { id: 27, text: 'Uttar Pradesh' },
  { id: 28, text: 'West Bengal' },


]
