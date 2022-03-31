import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BestPracticesService } from './best-practices.service';

@Component({
  selector: 'app-subject-on-service',
  templateUrl: './subject-on-service.component.html',
  styleUrls: ['./subject-on-service.component.scss'],
})
export class SubjectOnServiceComponent implements OnInit {
  message$!: Observable<string>;
  constructor(
    private service: BestPracticesService,
    private hostElement: ElementRef
  ) {}

  ngOnInit(): void {
    this.message$ = this.service.message$;
    // this.service.behaviourSub.complete();
    this.service.emitMessage('new Message');
    
    console.log('hostElement : ',this.hostElement.nativeElement.outerHTML);
  }
}
