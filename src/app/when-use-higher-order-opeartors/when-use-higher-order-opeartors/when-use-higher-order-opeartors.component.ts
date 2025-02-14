import { Component, OnInit } from '@angular/core';
import {
  concatMap, tap
} from 'rxjs/operators';
import { Blog } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-when-use-higher-order-opeartors',
    templateUrl: './when-use-higher-order-opeartors.component.html',
    styleUrls: ['./when-use-higher-order-opeartors.component.scss'],
    standalone: false
})
export class WhenUseHigherOrderOpeartorsComponent implements OnInit {
  constructor(private service: DataService) {}

  blog!: Blog;

  ngOnInit(): void {
    this.service
      .getUser()
      .pipe(
        concatMap((user) => this.service.getBlogById(user.id)),
        tap((blog) => this.blog = blog)
      )
      .subscribe();
  }
}
