import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { SubBehaveSubService } from '../sub-behave-sub.service';

@Component({
  selector: 'app-subject-behavior-subject',
  templateUrl: './subject-behavior-subject.component.html',
  styleUrls: ['./subject-behavior-subject.component.scss']
})
export class SubjectBehaviorSubjectComponent implements OnInit {
  // subject = new BehaviorSubject<string>('Frist');
  // observable$ = this.subject.asObservable();

  constructor(private router: Router,private service: SubBehaveSubService) {
  }

  ngOnInit(): void {
    // this.observable$.subscribe((value) => console.log(`NgOnInit ${value}`))
  }

  clickHandler(data: string) {
   const path = data == 'C1' ? 'rxjs/c1' : 'rxjs/c2';
    const header = data == 'C1' ? 'Welcome to C1' : 'Welcome to C2';
    this.router.navigateByUrl(path);
    this.service.subject.next(header);
  }

}
