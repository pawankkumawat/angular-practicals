import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { concatMap, takeUntil, tap } from 'rxjs/operators';
import { Blog } from 'src/app/models/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-unsub-observable-one',
  templateUrl: './unsub-observable-one.component.html',
  styleUrls: ['./unsub-observable-one.component.scss'],
})
export class UnsubObservableOneComponent implements OnInit {
  constructor(private service: DataService) {}
  blog$!: Observable<Blog>;

  ngOnInit(): void {
    this.blog$ = this.service.getUser().pipe(
      concatMap((user) => this.service.getBlogById(user.id)),
      // tap((blog) => (this.blog = blog))
    );
  }
}
