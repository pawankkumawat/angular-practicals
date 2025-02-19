

import { Component, effect, EventEmitter, input, Input, OnChanges, OnInit, output, Output, signal, SimpleChanges, viewChild, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { ELEMENT_DATA, OpenOrderDataItem } from './signals.model';


@Component({
  selector: 'app-signals-order-list',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
  imports: [CommonModule, AllMaterialModule],
  standalone: true
})
export class SignalsComponent  {
  orderData = input<OpenOrderDataItem[]>(ELEMENT_DATA);;
  orderSelectionChanged = output<OpenOrderDataItem |null>(); // Sending data to parent
  dataSource= signal<MatTableDataSource<OpenOrderDataItem>>(new MatTableDataSource());
  sort = viewChild(MatSort);
  displayedColumns= signal<string[]>(['OrderNumber', 'OrderType', 'ReceivedDate', 'CustomerNumber', 'VehicleId', 'LicensePlate', 'Status']);
  selectedOrder= signal<OpenOrderDataItem | null>(null);

  constructor() {
    effect(() => {
      const dataSource = this.dataSource();
      dataSource.sort = this.sort() || null;
      this.dataSource().data = this.orderData();
    });
  }

  onRowSelect(order: OpenOrderDataItem): void {
    this.selectedOrder.set(order);
    this.orderSelectionChanged.emit(this.selectedOrder());
  }
}
// import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { CommonModule } from '@angular/common';
// import { AllMaterialModule } from '../angular-material/all-material-module';
// import { ELEMENT_DATA, OpenOrderDataItem } from './signals.model';


// @Component({
//   selector: 'app-signals-order-list',
//   templateUrl: './signals.component.html',
//   styleUrls: ['./signals.component.scss'],
//   imports: [CommonModule, AllMaterialModule],
//   standalone: true
// })
// export class SignalsComponent implements OnInit, OnChanges {
//   @Input() orderData: OpenOrderDataItem[] = ELEMENT_DATA;
//   @Output() orderSelectionChanged = new EventEmitter<any>(); // Sending data to parent
//   dataSource: MatTableDataSource<OpenOrderDataItem> = new MatTableDataSource();
//   @ViewChild(MatSort) sort!: MatSort;
//   displayedColumns: string[] = ['OrderNumber', 'OrderType', 'ReceivedDate', 'CustomerNumber', 'VehicleId', 'LicensePlate', 'Status'];
//   selectedOrder: OpenOrderDataItem | null = null;
//   constructor() {}

//   ngOnInit(): void {
//     this.initializeTableData();
//   }

//   initializeTableData() {
//     this.dataSource.data = this.orderData || [];
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['orderData'] && changes['orderData'].currentValue) {
//       this.initializeTableData();
//     }
//   }

//   ngAfterViewInit(): void {
//     this.dataSource.sort = this.sort;
//   }

//   onRowSelect(order: any): void {
//     this.selectedOrder = order; 
//     this.orderSelectionChanged.emit(this.selectedOrder);
//   }
// }


