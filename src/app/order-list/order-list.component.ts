import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, effect, inject, OnInit, viewChild, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AllMaterialModule } from '../angular-material/all-material-module';
import { DataService } from '../services/data.service';
import { OpenOrderDataItem } from '../signals/signals.model';
import { timeout } from 'rxjs/internal/operators/timeout';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
  imports: [CommonModule, AllMaterialModule],
  standalone: true
})
export class OrderListComponent implements OnInit {
  dataSource: MatTableDataSource<OpenOrderDataItem> = new MatTableDataSource();
  displayedColumns: string[] = ['OrderNumber', 'OrderType', 'ReceivedDate', 'CustomerNumber', 'VehicleId', 'LicensePlate', 'Status'];
  dataService = inject(DataService);


  ngOnInit(): void {
    this.initializeTableData();
  }

  constructor() {
         // Automatically react to sort appearing/disappearing
    effect(() => {
      const sortInstance = this.sort();
      if (sortInstance) {
        this.dataSource.sort = sortInstance;
      }
    });
   }
 sort = viewChild(MatSort) ;
  initializeTableData() {
    this.dataService.getOpenOrderData().subscribe((data: OpenOrderDataItem[]) => {
      this.dataSource.data = data || [];
      // setTimeout(() => {
      //   this.dataSource.sort = this.sort;
      // }, 0);
    }, (error: any) => { console.error('Error fetching order data:', error); });
  }
}

