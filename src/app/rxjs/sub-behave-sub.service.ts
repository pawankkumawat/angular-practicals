import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubBehaveSubService {
  // subject = new Subject<string>();
  subject = new BehaviorSubject<string>('');
  observable$ = this.subject.asObservable();
  constructor() { }
}
