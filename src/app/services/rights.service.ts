import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rights } from 'src/app/models/models';

@Injectable({
  providedIn: 'root',
})
export class RightsService {
  constructor() {}

  getRights(): Observable<Rights> {
    return timer(1000).pipe(
      map(() => ({
        hasReadRights: true,
        hasDeleteRights: true,
        hasUpdateRights: true,
        hasCreateRights: true,
      }))
    );
  }


}

export class CountService {
  constructor() {}
  getCount(): Observable<number> {
    return timer(1000).pipe(
      map(() => 50)
    );
  }

  logCount(message:string){
    console.log(message);
    return true;
  }
}
export class FakeCountService {
  constructor() {}
  getCount(): Observable<number> {
    return timer(1000).pipe(
      map(() => 50)
    );
  }

  logCount(message:string){
    console.log(message);
    return true;
  }
}
