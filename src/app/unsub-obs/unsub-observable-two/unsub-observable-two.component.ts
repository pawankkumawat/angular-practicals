import { Component, OnDestroy } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { concatMap, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { takeUntilDestroyed,toSignal} from  '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-unsub-observable-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unsub-observable-two.component.html',
  styleUrl: './unsub-observable-two.component.scss',
})
export class UnsubObservableTwoComponent implements OnDestroy {
  // private unsub = new Subject<void>();
  timer$ = toSignal(timer(0, 1000)
  .pipe(
    tap((x) => console.log(x)),
    concatMap(()=>this.getData()),
    // takeUntilDestroyed(),
  ));
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    // timer(0, 1000)
    // .pipe(
    //   tap((x) => console.log(x)),
    //   concatMap(()=>this.getData()),
    //   takeUntilDestroyed(),
    // ).subscribe()
    // this.timer$.subscribe()
  }

  getData() {
    return this.dataService
      .getDataFromAPI()
      .pipe(map((response: any) => console.log(response)));
  }

  ngOnDestroy(): void {
    // this.unsub.next();
    // this.unsub.complete();
  }
}

// function timer$(){
// return  timer(0, 1000)
// .pipe(
//   tap((x) => console.log(x)),
//   takeUntilDestroyed(),
// )
// }

  // this.timer$.pipe(map(()=>this.getData()))
    //   .subscribe();


// private readonly timer$ =timer(0, 1000)
// .pipe(
//   tap((x) => console.log(x)),
//   switchMap(()=>this.getData()),
//   takeUntilDestroyed(),
// )

// this.timer$.subscribe()
