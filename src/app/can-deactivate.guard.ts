import { Observable } from 'rxjs';
import { CanDeactivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';

import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';

export interface CanComponentDeactivate {
  canDeactivate?: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> =
  (component: CanComponentDeactivate) => component.canDeactivate ? component.canDeactivate() : true;
