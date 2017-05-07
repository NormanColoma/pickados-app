import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "app/app.component";
import { LoginComponent } from "app/login/login.component";
import { HomeComponent } from "app/home/home.component";

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