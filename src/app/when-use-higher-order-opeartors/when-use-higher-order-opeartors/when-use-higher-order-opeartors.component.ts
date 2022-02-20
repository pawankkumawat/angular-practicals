import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, Observable, Subscription } from 'rxjs';
import {
  concatMap,
  switchMap,
  flatMap,
  mergeMap,
  map,
  tap,
} from 'rxjs/operators';
import { Blog, User } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-when-use-higher-order-opeartors',
  templateUrl: './when-use-higher-order-opeartors.component.html',
  styleUrls: ['./when-use-higher-order-opeartors.component.scss'],
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
