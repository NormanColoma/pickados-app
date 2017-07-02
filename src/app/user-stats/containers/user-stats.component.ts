import { Component, OnInit} from '@angular/core';
import { Stats } from 'app/user-stats/models/stats';
import { UserStatsService} from 'app/user-stats/user-stats.service';

@Component({
    selector: 'user-stats',
    templateUrl: './user-stats.component.html',
    providers: [UserStatsService]
})

export class UserStatsComponent  implements OnInit{
    stats: Stats[];

    constructor(private userStatsService: UserStatsService) { }

    ngOnInit(): void {
        this.getStatsByTipsterAndMonth(6);

    }

    getStatsByTipsterAndMonth(month: number): void {
        this.userStatsService
            .getByTipsterAndMonth(month)
            .subscribe((stats: Stats[]) => {
            this.stats = stats;
            });
    }
}
