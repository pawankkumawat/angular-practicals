import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-create-memory-leak',
    templateUrl: './create-memory-leak.component.html',
    styleUrls: ['./create-memory-leak.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CreateMemoryLeakComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
