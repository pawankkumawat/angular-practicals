import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, concatMap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-callback-hell',
  templateUrl: './callback-hell.component.html',
  styleUrls: ['./callback-hell.component.scss'],
})
export class CallbackHellComponent implements OnInit {
  constructor(private service: DataService) {}
  data!: any;
  ngOnInit(): void {
    this.data = this.service.getUser().pipe(
      tap((user)=>console.log(user)),
      concatMap((user)=>this.service.getBlogById(user.id)),
      tap((blog)=>console.log(blog)), // to set some variables
      concatMap((blog)=>this.service.getDropDownData())
    ).subscribe((group)=>console.log('group', group))
  }
}
