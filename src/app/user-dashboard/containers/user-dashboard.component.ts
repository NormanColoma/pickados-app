import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from "app/user-dashboard/user-dashboard.service";
import { Post } from "app/user-dashboard/models/post.interface";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'user-dashboard',
    template: `
    <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Pickados</a></li>
            <li class="breadcrumb-item active">Dashboard</li>
    </ol>
    <div class="d-md-flex flex-column align-items-center">
        <div class="list-group col-md-8">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Tu Timeline</h5>
                </div>
            </a>
            <user-dashboard-post *ngFor="let post of posts;" [post]="post"></user-dashboard-post>
        </div>
    </div>`
})

export class UserDashboardComponent implements OnInit {
    
    private posts : Post [];

    constructor(private userDashboardService : UserDashboardService, 
        private router: Router,  private route: ActivatedRoute,){}

    ngOnInit(): void {
        this.route.data
        .subscribe((data : { posts: Post []}) => {
            this.posts = data.posts;
            debugger;
      });
        /*this.userDashboardService.loadTimeline(32769)
        .subscribe((data : Post[]) => {
            this.posts = data;
            debugger;
        });*/
    }
}