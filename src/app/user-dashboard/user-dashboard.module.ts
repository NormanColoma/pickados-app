import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from "app/user-account/auth-guard.service";
import { UserDashboardComponent } from "app/user-dashboard/containers/user-dashboard.component";
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardService } from "app/user-dashboard/user-dashboard.service";
import { UserDashboardPostComponent } from "app/user-dashboard/components/user-dashboard-post/user-dashboard-post.component";
import { UserDashboardResolver } from "app/user-dashboard/user-dashboard-resolver.service";


const routes: Routes = [
    {
        path: 'dashboard',
        component: UserDashboardComponent,
        canActivate: [AuthGuard],
        resolve: {
            posts: UserDashboardResolver
        }
    },
]

@NgModule({
    declarations: [
        UserDashboardComponent,
        UserDashboardPostComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
    ],
    providers : [
        UserDashboardService,
        UserDashboardResolver
    ]
})

export class UserDashboardModule { }