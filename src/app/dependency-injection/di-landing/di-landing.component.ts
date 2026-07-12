import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-di-landing',
    templateUrl: './di-landing.component.html',
    styleUrls: ['./di-landing.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DiLandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
