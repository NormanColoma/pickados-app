import { Component, OnInit, Input} from '@angular/core';
import { Tipster } from 'app/tipsters/models/tipster';
import { Stats } from 'app/user-stats/models/stats';


@Component({
    selector: 'user-banner',
    templateUrl: './user-banner.component.html'
})

export class UserBannerComponent implements OnInit{

     @Input() tipster: Tipster;
     @Input() stats: Stats[];

    ngOnInit(): void {
    }
}
