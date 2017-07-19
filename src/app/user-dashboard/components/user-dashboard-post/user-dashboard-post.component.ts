import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Post } from "app/user-dashboard/models/post.interface";
import { PickOfPost } from "app/user-dashboard/models/pick.interface";

@Component({
    selector: 'user-dashboard-post',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1" class="text-primary">@{{ post.Tipster }}</h5>
                    <small><em>{{ post.Created_at | date:'medium' }}</em></small>
                </div>
                <p>
                    <small>
                      {{ getEvent() }}
                    </small>
                </p>
                <p class="mb-1">{{ post.Description }}</p>
                <small>
                    <strong>
                        {{ getPick() }}
                    </strong>
                </small>
        </a>
    `
})

export class UserDashboardPostComponent {
    @Input()
    post : Post;

    getPick() {
        const odd = this.post.GetAllPickOfPost[0].Odd;
        const market = this.post.GetAllPickOfPost[0].Description;
        const stake = this.post.Stake;
        const pick = `${odd} ${market} ${stake}/10`;

        return pick;
    }

    getEvent() {
      const sport = this.post.GetAllPickOfPost[0].GetAllMatchOfPick[0].Sport;
      const competition = this.post.GetAllPickOfPost[0].GetAllMatchOfPick[0].Competition;
      const home_team = this.post.GetAllPickOfPost[0].GetAllMatchOfPick[0].GetHomeOfEvent_home.Name;
      const away_team = this.post.GetAllPickOfPost[0].GetAllMatchOfPick[0].GetAwayOfEvent_away.Name;

      const event = `${sport} > ${competition} > ${home_team} - ${away_team}`;

      return event;
    }
}