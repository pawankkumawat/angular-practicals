import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-branching-two',
    templateUrl: './branching-two.component.html',
    styleUrls: ['./branching-two.component.scss'],
    standalone: false
})
export class BranchingTwoComponent implements OnInit {
  constructor(private service: DataService) {}

  dataRequiredForComponent!: any;
  ngOnInit(): void {
    this.service.getDropDownData().subscribe((result) => {
        // Process your result
        this.dataRequiredForComponent = {
          length: result.length,
          dataSource: result,
        };
   

      console.log('dataRequiredForComponent',this.dataRequiredForComponent)
    });
  }
}
