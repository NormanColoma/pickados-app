import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "app/app.component";
import { HomeComponent } from "app/home/home.component";
import { PostsDashboardComponent } from "app/posts-dashboard/containers/posts-dashboard.component";
import { UserStatsComponent } from "app/user-stats/containers/user-stats.component";
import { TipsterComponent } from "app/tipsters/containers/tipster.component";
import { UserAccountModule } from "app/user-account/user-account.module";

const appRoutes : Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostsDashboardComponent
  },
  {
    path: 'tipsters',
    component: TipsterComponent
  },
  {
    path: 'stats/:user',
    component: UserStatsComponent
  },
  {
    path: '**',
    redirectTo: '/home',
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
