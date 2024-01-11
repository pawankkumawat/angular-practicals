import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  CanDeactivateFn,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DialogService } from '../dialogs/dialog.service';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateCustomGuard
  implements CanDeactivate<Candeactivate>
{
  constructor(private service: DialogService) {}
  canDeactivate(
    component: Candeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (component && component?.candeactivate()) {
      const dialogRef = this.service.openDialog();
      return dialogRef.afterClosed().pipe(tap((res) => console.log(res)));
    } else {
      return true;
    }
  }
}

export interface Candeactivate {
  candeactivate:()=>boolean
}

export const candeactivateGuard: CanDeactivateFn<Candeactivate> = (
  component: Candeactivate,
  currentRoute,
  currentState,
  nextState
) => {
  if (component &&  component.candeactivate && component?.candeactivate()) {
    const service = inject(DialogService);
    const dialogRef = service.openDialog();

    return dialogRef.afterClosed().pipe(tap((res) => console.log(res)));
  } else {
    return true;
  }
};
