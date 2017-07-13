import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Post } from "app/user-dashboard/models/post.interface";
import { UserDashboardService } from "app/user-dashboard/user-dashboard.service";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';


@Injectable()
export class UserDashboardResolver implements Resolve<Post[]> {
  constructor(private userDashboardService: UserDashboardService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    debugger;
    return this.userDashboardService.loadTimeline(32769)
        .map((data) => {
            return data;
        });
  }
}