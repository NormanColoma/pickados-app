import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "app/app.component";
import { LoginComponent } from "app/login/login.component";
import { HomeComponent } from "app/home/home.component";
import { PostComponent } from "app/post/post.component";
import { StatsComponent } from "app/stats/stats.component";
import { TipsterComponent } from "app/tipsters/tipster.component";

const appRoutes : Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'tipsters',
    component: TipsterComponent
  },
  {
    path: 'stats',
    component: StatsComponent
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
