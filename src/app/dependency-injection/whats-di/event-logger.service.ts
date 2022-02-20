import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventLoggerService {
  constructor() {}

  log(message: string) {
    console.log(`event logging ${message}`);
    return timer(1000).pipe(
      map(()=>true)
    );
  }
}
