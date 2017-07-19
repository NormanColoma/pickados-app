import { Component, OnInit } from '@angular/core';
import { Post } from "app/user-dashboard/models/post.interface";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'user-dashboard-timeline',
    template: `<a href="#" class="list-group-item flex-column align-items-start bg-primary text-white">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1" class="display-4">Tu Timeline</h5>
                </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-center">
                <div class="d-flex w-90 justify-content-between">
                    <p class="text-center p-4">Ups!! Tu Timeline está todavía vacío. 
                    En cuanto tengamos algo que mostrarte lo verás aquí.</p>
                </div>
            </a>
            <user-dashboard-post *ngFor="let post of posts;" [post]="post"></user-dashboard-post>
            `
})

export class UserDashboardTimelineComponent implements OnInit{
    private posts : Post [];

    constructor(private router: Router,  private route: ActivatedRoute,){}

    ngOnInit(): void {
        this.route.data
        .subscribe((data : { posts: Post []}) => {
            this.posts = data.posts;
      });
    }
}