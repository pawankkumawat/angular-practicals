import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-content1',
    templateUrl: './content1.component.html',
    styleUrls: ['./content1.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class Content1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
