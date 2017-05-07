import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
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