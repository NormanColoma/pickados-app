import { Component } from '@angular/core';

interface Nav {
    link: string, 
    name: string, 
    exact: boolean
}

@Component({
    selector: 'header-component',
    template: `
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
            <a class="navbar-brand nav-link" routerLink="/home" routerLinkActive="active">Pickados</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" *ngFor="let item of nav">
                        <a 
                            [routerLink]="item.link" 
                            routerLinkActive="active"
                            [routerLinkActiveOptions]="{ exact: item.exact }"
                            class="nav-link">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    `,
    styles: [
    ]
})

export class HeaderComponent {
    nav: Nav[] = [
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
    {
      link: '/suscriptions',
      name: 'Suscripciones',
      exact: false
    }
  ];
}