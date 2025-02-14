import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/models';

@Component({
    selector: 'app-ng-container',
    templateUrl: './ng-container.component.html',
    styleUrls: ['./ng-container.component.scss'],
    standalone: false
})
export class NgContainerComponent implements OnInit {

  foods: Food[] = [
    {value: 'veg', viewValue: 'Veg'},
    {value: 'nonveg', viewValue: 'Non-Veg'},
  ];
  showMore = true;
  food=['Milk','Curd','',]
  constructor() { }
  
  ngOnInit(): void {
    // this.selectedCategory = 'mix';
  }

}
