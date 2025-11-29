
import { Component, inject } from '@angular/core';

export interface ISubject<T> {
  register: (observer: IObserver<T>) => void;
  // unregister: (observer: IObserver<T>) => void;
  notifyAll: (data: T) => void;
}
export class Subject1<T> implements ISubject<T> {

  obs: IObserver<T>[] = [];
  register(observable: IObserver<T>) {
    this.obs.push(observable);
  }


  notifyAll(data: T) {
    this.obs.forEach(o => o.update(data));
  }
}

// export class Subject2 implements ISubject {

//   obs: IObserver[] = [];
//   register(observable: IObserver) {
//     this.obs.push(observable);
//   }

//   unregister(obs: IObserver) {
//     this.obs = this.obs.filter(o => o!=obs);
//   }

//   notifyAll(data:string) {
//     data+= ' 2nd';
//     this.obs.forEach(o => o.update(data));
//   }
// }

export interface IObserver<T> {
  update: (data: T) => void;
}

export class EmailObserver  {
  afterDoSthWith:IObserver<string>= new GenObserver<string>(this.update);
  afterDoMoreWith:IObserver<{ name: string, age: number }>= new GenObserver<{ name: string, age: number }>(this.updateMore);
  constructor(){

  }
  update(data: string):void {
    console.log(`Email Observer: Email sent!  ${data}`);
  }
  updateMore(data:{ name: string, age: number }):void {
    console.log(`Email Observer: Email sent!  ${data}`);
  }
}

export class GenObserver<T> implements IObserver<T> {
  fn!: (data: T) => void;
  constructor(fn1: (data: T) => void) {
    this.fn = fn1;
  }
  update(data: T) {
    // console.log(`Email Observer: Email sent!  ${data}`);
    this.fn(data);
  }
}

export class SMSObserver implements IObserver<{ name: string, age: number }> {
  update(data: { name: string, age: number }) {
    console.log(`SMS Observer: SMS sent! ${data}`);
  }
}

@Component({
  selector: 'app-observer-pattern',
  templateUrl: './observer-pattern.component.html',
  styleUrl: './observer-pattern.component.scss',
  standalone: true,
  imports: [],

})
export class ObserverPatternComponent {
  // emailObserver:IObserver<string> = inject(EmailObserver);
  // smsObserver:IObserver<{name:string,age:number}>= inject(SMSObserver);
  subject: Subject1<string> = new Subject1();
  subject1: Subject1<{ name: string, age: number }> = new Subject1();

  onRegisterEmail() {
    this.subject.register(new EmailObserver()); // Register email observer
  }
  onRegisterSMS() {
    this.subject1.register(new SMSObserver()); // Register email observer
  }
  onRegisterSMS2() {
    this.subject1.register(new SMSObserver()); // Register email observer
  }

  // onUnregisterEmail() {
  //   this.subject.unregister(this.emailObserver); // Unregister email observer
  // }
  // onUnregisterSMS() { 
  //   this.subject1.unregister(this.smsObserver); // Unregister email observer
  // }

  onOperation() {
    this.subject.notifyAll('MY DATA'); // Notify all observers
    this.subject1.notifyAll({ name: 'Pawan', age: 18 }); // Notify all observers
  }

}
