import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/models';

@Injectable({
  providedIn:'root'
})
export class UserService {
 private userSub = new BehaviorSubject<User>({
    id:0,
    age: 0,
    name: ''
  });
  user$ = this.userSub.asObservable();
  constructor() {
    // console.log('in UserService Constructor')
   }
  broadcastUserData(user : User){
    this.userSub.next(user);
  }
}
