import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Event } from "app/user-dashboard/models/event.interface";

@Component({
    selector: 'user-dashboard-events',
    template: `<h1>Here the events will be loaded</h1>`
})

export class UserDashboardEventsComponent implements OnInit {
     private events : Event [];

    constructor(private router: Router,  private route: ActivatedRoute,){}

    ngOnInit(): void {
        this.route.data
        .subscribe((data : { events: Event []}) => {
            this.events = data.events;
            debugger;
      });
    }
}