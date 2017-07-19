import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    isEdit: boolean;
    editPass: boolean;
    sportPrefered: string;
    sportPreferedLabel: string;
    currentUser: any;

    constructor (private route: ActivatedRoute) {}

  ngOnInit(): void {

      this.isEdit = false;
      this.editPass = false;
      this.currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
      this.sportPrefered = this.currentUser.Sport;
      if(this.currentUser.Sport == 'Football') this.sportPreferedLabel = 'Fútbol';
      else if (this.currentUser.Sport == 'Basket') this.sportPreferedLabel = 'Baloncesto';
  
  }

  updateUser(userForm): void {
    this.isEdit = false;
  }
}