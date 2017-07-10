import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { NavHeaderComponent } from "app/header/components/nav-header/nav-header.component";

@NgModule({
    declarations: [
        NavHeaderComponent,
        HeaderComponent
    ],
    imports: [
         CommonModule,
         RouterModule
    ],
    exports: [
        HeaderComponent
    ]
})

export class HeaderModule {}