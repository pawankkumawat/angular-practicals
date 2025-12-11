import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Obj2Type, PerformanceService } from './performance.service';
import { IconTooltips } from '../constants/constant';

@Component({
  selector: 'app-performance',
  imports: [CommonModule, MatIconModule, MatCheckboxModule, MatTooltipModule],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.scss',
  standalone: true,
})
export class PerformanceComponent implements OnInit {
  dataService = inject(PerformanceService);
  data: any;
  readonly IconTooltips = IconTooltips;
  indeterminateState: boolean = false;
  newObj1: { [key: string]: { Text: string; Value: string } } = {};
  ngOnInit(): void {
    this.data = this.dataService.getData();
    // this.createNewObj();
    console.log(this.data);
  }

  createNewObj() {
    this.newObj1 = this.data.obj1.reduce((acc: any, item: any) => {
      acc[item.Value] = { Text: item.Text, Value: item.Value };
      return acc;
    }, {});
    console.log(this.newObj1);
  }

  AssignmentHeaderCheckBoxEvent(val: boolean) {
    if (!val) {
      this.data.obj2.map((el: Obj2Type) => (el.childrenCheckbox = false));
      this.indeterminateState = false;
    } else {
      this.data.obj2.map((el: Obj2Type) => (el.childrenCheckbox = true));
    }
  }
}