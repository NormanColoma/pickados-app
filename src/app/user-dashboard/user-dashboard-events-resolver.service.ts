import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Post } from "app/user-dashboard/models/post.interface";
import { Event } from "app/user-dashboard/models/event.interface";
import { UserDashboardService } from "app/user-dashboard/user-dashboard.service";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';


@Injectable()
export class UserDashboardEventsResolver implements Resolve<Event[]> {
  constructor(private userDashboardService: UserDashboardService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event[]> {
    return this.userDashboardService.loadEvents()
        .map((data) => {
            return data;
        });
  }
}