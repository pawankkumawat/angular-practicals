import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { concatMap, tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-callback-hell',
    templateUrl: './callback-hell.component.html',
    styleUrls: ['./callback-hell.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CallbackHellComponent {
  private service = inject(DataService);

      // this.data = this.service.getUser()
      // .subscribe((user)=>console.log('user', user))


      // this.data = this.service.getUser().subscribe((user)=>{
      //   console.log('user', user);
      //   this.service.getBlogById(user.id).subscribe((blog)=>{
      //     console.log('blog', blog);
      //     this.service.getCategoryByBlogId(blog.postId).subscribe((category)=>{
      //       console.log('category', category);
      //     })
      //   })
      // })

  ngOnInit(): void {
    // let data = this.service.getUser().pipe(
    //   tap((user)=>console.log(user)), // to set some variables
    //   concatMap((user)=>this.service.getBlogById(user.id)), // higher order operator
    //   tap((blog)=>console.log(blog)), //use tap to generate side effect
    //   concatMap((blog)=>this.service.getCategoryByBlogId(blog.postId)) // higher order operator
    // ).subscribe((category)=>console.log('category', category));
  }

  // Angular 22: chained rxResource for sequential dependent APIs
  user = rxResource({
    stream: () => this.service.getUser(),
  });

  blog = rxResource({
    params: ({ chain }) => chain(this.user)?.id,
    stream: ({ params: userId }) => this.service.getBlogById(userId),
  });

  category = rxResource({
    params: ({ chain }) => chain(this.blog)?.postId,
    stream: ({ params: postId }) => this.service.getCategoryByBlogId(postId),
  });
}
