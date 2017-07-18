import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


import { Event } from "app/user-dashboard/models/event.interface";
import { UserDashboardService } from "app/user-dashboard/user-dashboard.service";


@Component({
    selector: 'user-dashboard-publish-post',
    template: `<p>{{event.match_hometeam_name}}</p>`
})

export class UserDashboardPublishPostComponent implements OnInit{
    private event : Event;
    constructor(private router: Router,  private route: ActivatedRoute, 
        private userDashboardService: UserDashboardService){}
     ngOnInit(): void {
            this.route.data
                .subscribe((data: { event: Event }) => {
                    debugger;
                    this.event = data.event;
        });
    }
}