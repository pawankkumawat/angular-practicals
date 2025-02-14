import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, concatMap, mergeMap, switchMap, flatMap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-callback-hell',
    templateUrl: './callback-hell.component.html',
    styleUrls: ['./callback-hell.component.scss'],
    standalone: false
})
export class CallbackHellComponent implements OnInit {
  constructor(private service: DataService) {}
  data!: any;
  
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
    this.data = this.service.getUser().pipe(
      tap((user)=>console.log(user)), // to set some variables
      concatMap((user)=>this.service.getBlogById(user.id)), // higher order operator
      tap((blog)=>console.log(blog)), //use tap to generate side effect
      concatMap((blog)=>this.service.getCategoryByBlogId(blog.postId)) // higher order operator
    ).subscribe((category)=>console.log('category', category));


    this.data = this.service.getUser().pipe(
      tap((user)=>console.log(user)), // to set some variables
      switchMap((user)=>this.service.getBlogById(user.id)), // higher order operator
      tap((blog)=>console.log(blog)), // to set some variables
      switchMap((blog)=>this.service.getCategoryByBlogId(blog.postId))
    ).subscribe((category)=>console.log('category', category));

    this.data = this.service.getUser().pipe(
      tap((user)=>console.log(user)), // to set some variables
      mergeMap((user)=>this.service.getBlogById(user.id)),// higher order operator
      tap((blog)=>console.log(blog)), // to set some variables
      mergeMap((blog)=>this.service.getCategoryByBlogId(blog.postId)) // higher order operator
    ).subscribe((category)=>console.log('category', category))

  }

}
