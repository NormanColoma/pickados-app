import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'user-dashboard',
    styleUrls: ['./user-dashboard.component.css'],
    template: `
    <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Pickados</a></li>
            <li class="breadcrumb-item"><a routerLink="/dashboard">Dashboard</a></li>
            <li class="breadcrumb-item active">{{ currentUrl | titlecase | breadcrumburl }}</li>
    </ol>

    <div class="d-md-flex flex-row events-side-bar">
        <div class="list-group col-md-4">
             <a class="list-group-item flex-column align-items-start bg-success text-white">
                <div class="d-flex w-100 justify-content-between">
                    <h3 class="mb-1">Introduce tu pick</h3>
                </div>
            </a>
            <a routerLink="events" class="list-group-item list-group-item-action flex-column align-items-start event-row">
                <div class="d-flex w-100 justify-content-between">
                    <p class="w-100 float-left">
                        <i class="fa fa-calendar pr-2" aria-hidden="true"></i>Próximos eventos
                        <i class="fa fa-chevron-right float-right mt-1" aria-hidden="true"></i>
                    </p>
                </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start event-row">
                <div class="d-flex w-100 justify-content-between">
                    <p class="w-100 float-left">
                        <i class="fa fa-futbol-o pr-2" aria-hidden="true"></i>Fútbol
                         <i class="fa fa-chevron-right float-right mt-1" aria-hidden="true"></i>
                    </p>
                </div>
            </a>
             <a href="#" class="list-group-item list-group-item-action flex-column align-items-start event-row">
                <div class="d-flex w-100 justify-content-between">
                    <p class="w-100 float-left">
                        <i class="fa fa-futbol-o pr-2" aria-hidden="true"></i>Baloncesto
                         <i class="fa fa-chevron-right float-right mt-1" aria-hidden="true"></i>
                    </p>
                </div>
            </a>
        </div>
        <div class="list-group col-md-8">
            <router-outlet></router-outlet>
        </div>
    </div>`
})

export class UserDashboardComponent implements OnInit {
    constructor(private router: Router,  private route: ActivatedRoute){}
    private currentUrl : string = "/Dashboard";

    ngOnInit(): void {
         this.router.events.subscribe((val) => {
            this.currentUrl = this.router.url;
         });
    }

    
}