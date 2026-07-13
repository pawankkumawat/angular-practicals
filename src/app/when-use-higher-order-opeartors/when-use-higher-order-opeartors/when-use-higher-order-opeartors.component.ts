import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { concatMap, tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-when-use-higher-order-opeartors',
  templateUrl: './when-use-higher-order-opeartors.component.html',
  styleUrls: ['./when-use-higher-order-opeartors.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class WhenUseHigherOrderOpeartorsComponent {

  constructor(private service: DataService) { }
  /* ng-container usecase start
    // blog!: Blog;
    // ngOnInit(): void {
    //   this.service
    //   .getUser()
    //   .pipe(
    //     concatMap((user) => this.service.getBlogById(user.id)),
    //     tap((blog) => this.blog = blog)
    //   )
    //   .subscribe();
    // }
  ng-container usecase Ends */

  /* without async pipe usecase start
    blog!: Blog;
    subscription!: Subscription;
    ngOnInit(): void {
      this.service
      .getUser()
      .pipe(
        concatMap((user) => this.service.getBlogById(user.id)),
        tap((blog) => this.blog = blog)
      )
      .subscribe();
    }
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
    
    //without async pipe usecase Ends */

  // with async pipe usecase start
  // blog$!: Observable<Blog>;
  // ngOnInit(): void {
  //   this.blog$ = this.service
  //   .getUser()
  //   .pipe(
  //     concatMap((user) => this.service.getBlogById(user.id)),
  //     tap((blog) => console.log(blog))
  //   )
  // }
  // with async pipe usecase Ends */

    // with rxResource + chain
    user = rxResource({
      stream: () => this.service.getUser(),
    });
  
    blog = rxResource({
      params: ({ chain }) => chain(this.user)?.id,
      stream: ({ params: userId }) => this.service.getBlogById(userId),
    });
}
