import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shared-c1',
  templateUrl: './shared-c1.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone:true
})
export class SharedC1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
