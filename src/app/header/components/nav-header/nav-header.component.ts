import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Nav } from "app/header/nav.interface";

@Component({
    selector: 'nav-header',
    template: `
    <ul class="navbar-nav">
        
        <li class="dropdown nav-item" *ngIf="profile==true">
            <a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#">Hola, {{alias}}
            <span class="caret"></span></a>
            <ul class="dropdown-menu">
            <li><a class="nav-link" [routerLink]="['/profile', alias]" >Configuración</a></li>
            <li><a class="nav-link" [routerLink]="['/stats', alias]">Mis Stats</a></li>
            </ul>
         </li>
        <li class="nav-item" *ngFor="let item of items">
            <a 
                [routerLink]="item.link" 
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: item.exact }"
                class="nav-link"
                (click)="handleLogOut()">
                {{ item.name }}
            </a>
        </li>     
    </ul>   
    `
})

export class NavHeaderComponent {
    @Input()
     items: Nav[];
//<li class="nav-item" *ngIf="profile==true"><a class="nav-link">Hola, {{alias}}</a></li>
     @Input()
     profile: boolean;

    @Output()
    logout: EventEmitter <any> = new EventEmitter();

    alias: string = JSON.parse(localStorage.getItem('loggedInUser')).Alias;

    handleLogOut(){
        this.logout.emit();
    }
}