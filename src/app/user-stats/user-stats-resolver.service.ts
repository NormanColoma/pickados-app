import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Stats } from 'app/user-stats/models/stats';
import { Observable } from "rxjs/Observable";
import { UserStatsService} from 'app/user-stats/user-stats.service';
import 'rxjs/add/operator/toPromise';

 
@Injectable()
export class UserStatsResolver implements Resolve<Stats[]> {

  constructor(private userStatsService: UserStatsService, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stats[]> {
    //let id = route.paramMap.get('alias');

    return this.userStatsService.getByTipsterAndMonth(6);
  }
}