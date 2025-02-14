import { Component, OnInit } from '@angular/core';
import { BranchingDataObj } from 'src/app/constants/constant';

@Component({
    selector: 'app-branching',
    templateUrl: './branching.component.html',
    styleUrls: ['./branching.component.scss'],
    standalone: false
})
export class BranchingComponent implements OnInit {
  constructor() {}

  isSliderOne = false;
  isSliderTwo = false;
  ngOnInit(): void {
    // readble code
    const data = BranchingDataObj;
    data
      .filter((element) => element.key === 'myKey')
      .map((element) =>
        element.value == 'myValue'
          ? (this.isSliderOne = true)
          : (this.isSliderOne = false)
      );
    data
      .filter((element) => element.key === 'myAnotherKey')
      .map((element) =>
        element.value == 'myAnotherValue'
          ? (this.isSliderTwo = true)
          : (this.isSliderTwo = false)
      );
  }
}
