import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Event } from "app/user-dashboard/models/event.interface";
import { UserDashboardService } from "app/user-dashboard/user-dashboard.service";

@Component({
    selector: 'user-dashboard-events',
    template: `<table class="table">
                <thead class="thead-inverse">
                    <tr>
                        <th>Fecha</th>
                        <th>Competición</th>
                        <th>Deporte</th>
                        <th>Liga</th>
                        <th>Partido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let event of events;">
                        <th scope="row">{{event.match_time}}</th>
                        <td>{{ getCountry(event.country_id) }}</td>
                        <td>Fútbol</td>
                        <td>{{ getLeague(event.league_id) }}</td>
                        <td><a [routerLink]="getMatchLink(event.match_id)">{{ getMatch(event) }}</a></td>
                    </tr>
                </tbody>
            </table>`
})

export class UserDashboardEventsComponent implements OnInit {
     private events : Event [];

    constructor(private router: Router,  
        private route: ActivatedRoute, private userDashboardService: UserDashboardService){}

    ngOnInit(): void {
        this.route.data
        .subscribe((data : { events: Event []}) => {
            this.events = data.events;
            debugger;
      });
    }

    getMatch(event) {
        const match = `${event.match_hometeam_name} - ${event.match_awayteam_name}`;
        return match;
    }

    getLeague(id) {
        return this.userDashboardService.getLeague(id);
    }

    getCountry(id) {
        return this.userDashboardService.getCountry(id);
    }

    getMatchLink(match_id) {
        return `${match_id}/post`
    }
}