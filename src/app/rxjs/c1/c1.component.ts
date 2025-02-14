import { Component, OnInit } from '@angular/core';
import { SubBehaveSubService } from '../sub-behave-sub.service';

@Component({
    selector: 'app-c1',
    templateUrl: './c1.component.html',
    styleUrls: ['./c1.component.scss'],
    standalone: false
})
export class C1Component implements OnInit {
  header$ = this.service.observable$;
  constructor(private service: SubBehaveSubService) {

  }

  ngOnInit(): void {
  }

}
