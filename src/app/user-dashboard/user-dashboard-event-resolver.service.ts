import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot, ActivatedRoute, Params
} from '@angular/router';
import { Post } from "app/user-dashboard/models/post.interface";
import { Event } from "app/user-dashboard/models/event.interface";
import { UserDashboardService } from "app/user-dashboard/user-dashboard.service";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/Rx';


@Injectable()
export class UserDashboardEventResolver implements Resolve<Event> {
  constructor(private userDashboardService: UserDashboardService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event> {
     return this.userDashboardService.loadEvent(route.params.matchid)
        .map((data) => {
            return data;
        });
  }
}