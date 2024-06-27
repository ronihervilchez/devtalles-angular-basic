import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  public canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    segments: RouterStateSnapshot
  ) => {
    console.log('CanActivate');
    console.log({ route, segments });
    return false;
  };

  public canMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    console.log('CanMatch');
    console.log({ route, segments });
    return false;
  };

  constructor() {}
}
