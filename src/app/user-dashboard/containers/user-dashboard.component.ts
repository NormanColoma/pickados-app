import { Component, OnInit } from '@angular/core';
import { Post } from "app/user-dashboard/models/post.interface";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'user-dashboard',
    styleUrls: ['./user-dashboard.component.css'],
    template: `
    <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Pickados</a></li>
            <li class="breadcrumb-item active">Dashboard</li>
    </ol>

    <div class="d-md-flex flex-row align-items-center events-side-bar">
        <div class="list-group col-md-4">
             <a href="#" class="list-group-item list-group-item-action flex-column align-items-start bg-success text-white">
                <div class="d-flex w-100 justify-content-between">
                    <h3 class="mb-1">Introduce tu pick</h3>
                </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start event-row">
                <div class="d-flex w-100 justify-content-between">
                    <p><i class="fa fa-calendar" aria-hidden="true"></i>Próximos eventos</p>
                </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start event-row">
                <div class="d-flex w-100 justify-content-between">
                    <p><i class="fa fa-futbol-o" aria-hidden="true"></i> Fútbol</p>
                </div>
            </a>
             <a href="#" class="list-group-item list-group-item-action flex-column align-items-start event-row">
                <div class="d-flex w-100 justify-content-between">
                    <p><i class="fa fa-futbol-o" aria-hidden="true"></i> Basket</p>
                </div>
            </a>
        </div>
        <div class="list-group col-md-8">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start bg-primary text-white">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1" class="display-4">Tu Timeline</h5>
                </div>
            </a>
            <user-dashboard-post *ngFor="let post of posts;" [post]="post"></user-dashboard-post>
        </div>
    </div>`
})

export class UserDashboardComponent implements OnInit {
    
    private posts : Post [];

    constructor(private router: Router,  private route: ActivatedRoute,){}

    ngOnInit(): void {
        this.route.data
        .subscribe((data : { posts: Post []}) => {
            this.posts = data.posts;
            debugger;
      });
    }
}