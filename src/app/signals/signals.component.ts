// import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { CommonModule } from '@angular/common';
// import { AllMaterialModule } from '../angular-material/all-material-module';


// @Component({
//   selector: 'app-signals-order-list',
//   templateUrl: './signals.component.html',
//   styleUrls: ['./signals.component.scss'],
//   imports: [CommonModule, AllMaterialModule],
//   standalone: true
// })
// export class SignalsComponent implements OnInit, OnChanges {
//   selectedOrder: any = null;
//   displayedColumns: string[] = ['OrderNumber', 'OrderType', 'ReceivedDate', 'CustomerNumber', 'VehicleId', 'LicensePlate', 'Status'];

//   dataSource: MatTableDataSource<OpenOrderDataItem> = new MatTableDataSource();
//   @ViewChild(MatSort) sort!: MatSort;

//   @Input() orderData: OpenOrderDataItem[] = ELEMENT_DATA
//   @Output() orderSelectionChanged = new EventEmitter<any>(); // Sending data to parent

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



import { CommonModule } from '@angular/common';
import { Component, computed, effect, input, output, signal, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { ELEMENT_DATA, OpenOrderDataItem } from './signals.model';

@Component({
  selector: 'app-signals-order-list',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
  imports: [CommonModule, AllMaterialModule],
})
export class SignalsComponent {
  displayedColumns = signal<string[]>([
    'OrderNumber',
    'OrderType',
    'ReceivedDate',
    'CustomerNumber',
    'VehicleId',
    'LicensePlate',
    'Status',
  ]);

  dataSource = signal(new MatTableDataSource<OpenOrderDataItem>());
  @ViewChild(MatSort) sort!: MatSort;
  selectedOrder = signal<OpenOrderDataItem |   null>(null);
  isRowSelected = computed(() => {
    return (row: OpenOrderDataItem) => row.OrderNumber === this.selectedOrder()?.OrderNumber;
  });
  orderData = input<OpenOrderDataItem[]>(ELEMENT_DATA);
  orderSelectionChanged = output<OpenOrderDataItem | null>();
  sortSignal = signal<MatSort | null>(null);

  constructor() {
    effect(() => {
      const newData = this.orderData();
      const currentDataSource = this.dataSource();
      currentDataSource.data = newData;
      currentDataSource.sort = this.sortSignal();
    });
  }

  ngAfterViewInit() {
    this.sortSignal.set(this.sort);
  }

  onRowSelect(order: any): void {
    this.selectedOrder.set(order);
    this.orderSelectionChanged.emit(this.selectedOrder());
  }
}