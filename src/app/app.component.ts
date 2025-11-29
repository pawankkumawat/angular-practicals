import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterdataService } from './services/routerdata.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  mobileQuery: MediaQueryList;
  header = 'Dashboard';
  private _mobileQueryListener: () => void;
  routeData$!:Observable<any>;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public routerdataService:RouterdataService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.routeData$ = this.routerdataService.routeData$;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
    window.location.host
  );
}
