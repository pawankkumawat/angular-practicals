import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Processor, ImageProcessor } from '../image-process';

@Component({
    selector: 'app-c2',
    templateUrl: './c2.component.html',
    styleUrls: ['./c2.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class C2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
