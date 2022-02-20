import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventLoggerService } from './event-logger.service';

@Injectable({
  providedIn: 'root',
  useExisting: EventLoggerService,
})
export class ConsoleLoggerService {
  constructor() {}

  log(message: string): Observable<boolean> {
    console.log(`console logging ${message}`);
    return timer(1000).pipe(map(() => true));
  }
}
