import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stats } from 'app/user-stats/models/stats';
import { Tipster } from 'app/tipsters/models/tipster';
import { UserStatsService} from 'app/user-stats/user-stats.service';
import { TipstersService } from 'app/tipsters/tipsters.service';

@Component({
    selector: 'user-stats',
    templateUrl: './user-stats.component.html',
    providers: [UserStatsService, TipstersService]
})

export class UserStatsComponent  implements OnInit{
    stats: Stats[];
    tipster: Tipster;

    user: string;
    private sub: any;


    constructor(private userStatsService: UserStatsService,
                private tipstersService: TipstersService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
        this.user = params['user']; 
        this.getTipsterByAlias(this.user);
        this.getStatsByTipsterAndMonth(6, this.user);
    
    });
}

    getTipsterByAlias(alias: string): void {
        this.tipstersService
            .getByAlias(alias)
            .subscribe((tipster: Tipster) => {
                this.tipster = tipster;
                console.log(this.tipster.Alias);
            });
    }

    getStatsByTipsterAndMonth(month: number, alias: string): void {
        this.userStatsService
            .getByTipsterAndMonth(month, alias)
            .subscribe((stats: Stats[]) => {
                this.stats = stats;
            });
    }
}
