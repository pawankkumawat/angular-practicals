import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterdataService {
  routeDataSubject = new Subject<any>();
  routeData$ = this.routeDataSubject.asObservable();
  constructor() {}
  emitRouteData(val: any) {
    this.routeDataSubject.next(val);
  }
}
