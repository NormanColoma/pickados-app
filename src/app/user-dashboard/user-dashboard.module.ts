import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from "app/user-account/auth-guard.service";
import { UserDashboardComponent } from "app/user-dashboard/containers/user-dashboard.component";
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardService } from "app/user-dashboard/user-dashboard.service";
import { UserDashboardPostComponent } from "app/user-dashboard/components/user-dashboard-post/user-dashboard-post.component";
import { UserDashboardResolver } from "app/user-dashboard/user-dashboard-resolver.service";
import { UserDashboardTimelineComponent } from "app/user-dashboard/containers/user-dashboard-timeline/user-dashboard-timeline.component";
import { UserDashboardEventsComponent } from "app/user-dashboard/containers/user-dashboard-events/user-dashboard-events.component";
import { BreadCrumbPipe } from "app/user-dashboard/breadcrumb.pipe";


const routes: Routes = [
    {
        path: 'dashboard',
        component: UserDashboardComponent,
        children: [
            {
                path: '',
                component: UserDashboardTimelineComponent,
                resolve: {
                    posts: UserDashboardResolver
                }
            },
            {
                path: 'events',
                component: UserDashboardEventsComponent,
            }
        ],
        canActivate: [AuthGuard],
        
    },
]

@NgModule({
    declarations: [
        UserDashboardComponent,
        UserDashboardPostComponent,
        UserDashboardTimelineComponent,
        UserDashboardEventsComponent,
        BreadCrumbPipe
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