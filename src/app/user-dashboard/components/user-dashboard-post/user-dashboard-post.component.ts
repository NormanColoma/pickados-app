import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Post } from "app/user-dashboard/models/post.interface";

@Component({
    selector: 'user-dashboard-post',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small>{{ post.Created_at }}</small>
                </div>
                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small>Donec id elit non mi porta.</small>
        </a>
    `
})

export class UserDashboardPostComponent {
    @Input()
    post : Post;
}