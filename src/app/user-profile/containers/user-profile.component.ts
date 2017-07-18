import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Post} from 'app/posts-dashboard/services/post';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    isEdit: boolean;
    sportPrefered: string;
    currentUser: string;

    private sub: any;

    constructor (private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.isEdit = false;
      this.sub = this.route.params.subscribe(params => {
      this.currentUser = params['user'];

    })
  }
}