import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


import { Event } from "app/user-dashboard/models/event.interface";
import { UserDashboardService } from "app/user-dashboard/user-dashboard.service";
import { Post } from "app/user-dashboard/models/post.interface";
import { PostPublication } from "app/user-dashboard/models/post-publication.interface";


@Component({
    selector: 'user-dashboard-publish-post',
    template: `<div class="card">
                    <div class="card-block">
                        <h4 class="card-title">{{ getMatch(event) }}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">{{ getCompetition(event) }}</h6>
                        <form class="mt-3 d-flex flex-column" #form="ngForm" (ngSubmit)="handleSubmit(form.value)" novalidate>
                            <div class="w-100 float-left mb-3 form-group">
                                <p class="float-left">{{ event.match_hometeam_name}}</p>
                                <div class="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="btn-group mr-2" role="group" aria-label="First group">
                                        <button type="button" class="btn btn-secondary" (click)="setStake('1', 1)">1</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('1', 2)">2</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('1', 3)">3</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('1', 4)">4</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('1', 5)">5</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('1', 6)">6</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('1', 7)">7</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('1', 8)">8</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('1', 9)">9</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('1', 10)">10</button>
                                    </div>
                                </div>
                                <p class="float-right pr-3">{{ event.odds.odd_1}}</p>
                            </div>
                            <div class="w-100 float-left mb-3 form-group">
                                <p class="float-left">{{ event.match_awayteam_name}}</p>
                                <div class="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="btn-group mr-2" role="group" aria-label="First group">
                                        <button type="button" class="btn btn-secondary" (click)="setStake('2', 1)">1</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('2', 2)">2</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('2', 3)">3</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('2', 4)">4</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('2', 5)">5</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('2', 6)">6</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('2', 7)">7</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('2', 8)">8</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('2', 9)">9</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('2', 10)">10</button>
                                    </div>
                                </div>
                                <p class="float-right pr-3">{{ event.odds.odd_2}}</p>
                            </div>
                            <div class="w-100 float-left mb-3 form-group">
                                <p class="float-left">Empate</p>
                                <div class="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="btn-group mr-2" role="group" aria-label="First group">
                                        <button type="button" class="btn btn-secondary" (click)="setStake('X', 1)">1</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('X', 2)">2</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('X', 3)">3</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('X', 4)">4</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('X', 5)">5</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('X', 6)">6</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('X', 7)">7</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('X', 8)">8</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('X', 9)">9</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('X', 10)">10</button>
                                    </div>
                                </div>
                                <p class="float-right pr-3">{{ event.odds.odd_x}}</p>
                            </div>
                            <div class="w-100 float-left mb-3 form-group">
                                <p class="float-left">+2.5 Goles</p>
                                <div class="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="btn-group mr-2" role="group" aria-label="First group">
                                        <button type="button" class="btn btn-secondary" (click)="setStake('o2.5', 1)">1</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('o2.5', 2)">2</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('o2.5', 3)">3</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('o2.5', 4)">4</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('o2.5', 5)">5</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('o2.5', 6)">6</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('o2.5', 7)">7</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('o2.5', 8)">8</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('o2.5', 9)">9</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('o2.5', 10)">10</button>
                                    </div>
                                </div>
                                <p class="float-right pr-3">{{ event.odds['o+2.5'] || 1.65}}</p>
                            </div>
                            <div class="w-100 float-left form-group mb-3">
                                <p class="float-left">-2.5 Goles</p>
                                <div class="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="btn-group mr-2" role="group" aria-label="First group">
                                        <button type="button" class="btn btn-secondary" (click)="setStake('u2.5', 1)">1</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('u2.5', 2)">2</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('u2.5', 3)">3</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('u2.5', 4)">4</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('u2.5', 5)">5</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('u2.5', 6)">6</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('u2.5', 7)">7</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('u2.5', 8)">8</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('u2.5', 9)">9</button>
                                        <button type="button" class="btn btn-secondary" (click)="setStake('u2.5', 10)">10</button>
                                    </div>
                                </div>
                                <p class="float-right pr-3">{{ event.odds['u+2.5'] || 1.98}}</p>
                            </div>
                             <div class="form-group">
                                <label for="exampleTextarea">Comentarios</label>
                                <textarea class="form-control" id="exampleTextarea" name="Description" ngModel required rows='2'></textarea>
                            </div>
                            <div class="w-100 float-left">
                                <h5 class="float-right">Beneficio: {{ post.TotalOdd}}</h5>
                            </div>
                            <button type="submit" class="btn btn-primary w-25" [disabled]="form.invalid || post.TotalOdd === 0">Publicar</button>
                        </form>
                       
                    </div>
              </div>`
})

export class UserDashboardPublishPostComponent implements OnInit{
    private event : any;
    private post: PostPublication = {
        Created_at: new Date().toString(),
        Description: "",
        PostResult: 0, 
        Stake: 0,
        TotalOdd: 0.00,
        Tipster: ""
    };
    constructor(private router: Router,  private route: ActivatedRoute, 
        private userDashboardService: UserDashboardService){}
     ngOnInit(): void {
            this.route.data
                .subscribe((data: { event: Event }) => {
                    this.event = data.event;
        });
        this.post.Stake = 0.00;
    }

    getMatch(event) {
        const match = `${event.match_hometeam_name} - ${event.match_awayteam_name}`;
        return match;
    }

    getCompetition(event) {
        const competition = `Fútbol > ${event.country_name} > ${event.league_name}`;
        return competition;
    }

    setStake(market, qty) {
        this.post.Stake = qty;
        switch(market) {
            case '1': 
                this.post.TotalOdd = parseFloat((qty * this.event.odds.odd_1).toFixed(2));
                break;
            case '2': 
                 this.post.TotalOdd = parseFloat((qty * this.event.odds.odd_2).toFixed(2));
                break;
            case 'X': 
                this.post.TotalOdd = parseFloat((qty * this.event.odds.odd_x).toFixed(2));
                break;
            case 'o2.5': 
                this.post.TotalOdd = parseFloat((qty * ( this.event.odds['o+2.5'] || 1.65)).toFixed(2));
                break;
            case 'u2.5': 
                this.post.TotalOdd = parseFloat((qty * ( this.event.odds['o-2.5'] || 1.98)).toFixed(2));
                break;
        }  
    }

    handleSubmit(value) {
        this.post.Description = value.Description;
        debugger;
    }
}