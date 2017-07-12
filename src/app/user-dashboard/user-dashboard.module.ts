import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from "app/user-account/auth-guard.service";
import { UserDashboardComponent } from "app/user-dashboard/containers/user-dashboard.component";
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardService } from "app/user-dashboard/user-dashboard.service";


const routes: Routes = [
    {
        path: 'dashboard',
        component: UserDashboardComponent,
        canActivate: [AuthGuard]
    },
]

@NgModule({
    declarations: [
        UserDashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
    ],
    providers : [
        UserDashboardService
    ]
})

export class UserDashboardModule { }