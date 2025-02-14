import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, timer } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-auto-refresh-timer',
    templateUrl: './auto-refresh-timer.component.html',
    styleUrls: ['./auto-refresh-timer.component.scss'],
    standalone: false
})
export class AutoRefreshTimerComponent implements OnInit,OnDestroy {

//  interval:any;
private unsub = new Subject<void>();
 constructor(private dataService:DataService) {}

  ngOnInit(): void {
    // this.getData();
    // this.interval = setInterval(()=>{
    //   this.getData();
    // },10000);

    //   this.getData().subscribe();
    // interval(10000).pipe(
    //   tap((x)=>console.log(x)),
    //   takeUntil(this.unsub),
    //   switchMap(()=>this.getData())
    // ).subscribe();
    timer(0,15000).pipe(
      tap((x)=>console.log(x)),
      takeUntil(this.unsub),
      switchMap(()=>this.getData())
    ).subscribe();

  }

  getData(){
   return this.dataService.getDataFromAPI().pipe(
      map((response:any)=>console.log(response))
    );
  }
  // getData(){
  //  this.dataService.getDataFromAPI().pipe(
  //     map((response:any)=>console.log(response))
  //   ).subscribe();
  // }

  ngOnDestroy(): void {
    // clearInterval(this.interval);

this.unsub.next();
this.unsub.complete();
  }

}
