import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
    providers: [UserService],
    selector: 'user-panel-component',
    templateUrl: './user-panel.component.html',
    styleUrls: ['./user-panel.component.css']
})

export class UserPanelComponent implements OnInit{
  user: User;

  ngOnInit(): void {
    this.getUser();
  }

  constructor(private userService: UserService) { }

  getUser(): void {
    this.userService.getUserById('Jaro').then(user => this.user = user);
  }
}
