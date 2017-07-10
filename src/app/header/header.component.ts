import { Component, OnInit } from '@angular/core';
import { Nav } from "app/header/nav.interface";
import { UserAccountService } from "app/user-account/user-account.service";

@Component({
    selector: 'header-component',
    template: `
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
            <a class="navbar-brand nav-link" routerLink="/home" routerLinkActive="active">Pickados</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <nav-header [items]="nav" class="mr-auto"></nav-header>
                <nav-header [items]="anonimousNav" *ngIf="!isLoggedIn"></nav-header>
                <nav-header 
                    [items]="loggedInNav" 
                    *ngIf="isLoggedIn" 
                    (logout)="onLogout($event)">
                </nav-header>
            </div>
        </nav>
    `,
    styles: [
    ]
})

export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private userAccountService: UserAccountService){}

  ngOnInit(): void {
   this.isLoggedIn = this.userAccountService.isLogged();
  }

  onLogout(){
      this.isLoggedIn = false;
      this.userAccountService.logOut();
  }
  

  nav: Nav[] = [
    {
      link: '/suscriptions',
      name: 'Suscripciones',
      exact: false
    }
  ];

  anonimousNav: Nav[] = [
    {
      link: '/account/login',
      name: 'Login',
      exact: true
    },
    {
      link: '/account/register',
      name: 'Registrarse',
      exact: true
    },
  ];

  loggedInNav: Nav[] = [
    {
      link: '/home',
      name: 'Salir',
      exact: true
    },
  ]
}