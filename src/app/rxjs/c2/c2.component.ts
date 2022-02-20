import { Component, OnInit } from '@angular/core';
import { SubBehaveSubService } from '../sub-behave-sub.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styles: [
  ]
})
export class C2Component implements OnInit {
  header$ = this.service.observable$;
  constructor(private service: SubBehaveSubService) { }

  ngOnInit(): void {
  }

}
