import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-content2',
    templateUrl: './content2.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class Content2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
