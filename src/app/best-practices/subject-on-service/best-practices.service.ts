import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BestPracticesService {
  constructor() { }

 private behaviourSub = new BehaviorSubject<string>('First Message')

  message$ = this.behaviourSub.asObservable();
  
  emitMessage(message:string){
    this.behaviourSub.next(message);
  }
}
