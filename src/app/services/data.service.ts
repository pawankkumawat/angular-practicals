import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { RAPID_API_KEY } from '../constants/constant';
import { Blog, Group, User } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return timer(1000).pipe(
      map((x) => ({
        id: 1,
        name: 'Rajiv',
        age: 24,
      }))
    );
  }

  getBlogById(id: number): Observable<Blog> {
    return timer(2000).pipe(
      map((x) => ({
        postId: 1,
        title: 'Learn RxJS',
        averageReadingTime: 5,
        category: 'Angular',
      }))
    );
  }

  getBlogsById(id: number): Observable<Blog[]> {
    return timer(2000).pipe(
      map((x) => [
        {
          postId: 1,
          title: 'Learn RxJS',
          averageReadingTime: 5,
          category: 'Angular',
        },
        {
          postId: 2,
          title: 'Refactor Branching',
          averageReadingTime: 5,
          category: 'General Programming',
        },
      ])
    );
  }

  getDropDownData(): Observable<Group[]> {
    return timer(2000).pipe(
      map((x) => [
        // {
        //   id: 1,
        //   text: 'Group 1',
        // },
        // {
        //   id: 2,
        //   text: 'Group 2',
        // },
      ])
    );
  }

  getMasterData() {
    return timer(2000).pipe(
      map((x) => ({
        Id: 1,
        Text: 'General',
        DateCreated: '20-11-2021',
        DateModified: '20-11-2021',
        IsActive: true,
        IsUsed: false,
      }))
    );
  }

  getDataFromAPI(): Observable<string> {
    return this.http
      .get('https://imdb8.p.rapidapi.com/auto-complete?q=game', {
        headers: new HttpHeaders()
          .set('x-rapidapi-host', 'imdb8.p.rapidapi.com')
          .set('x-rapidapi-key', RAPID_API_KEY),
      })
      .pipe(map((response: any) => response['q'] as string));
  }
}
