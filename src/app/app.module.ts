import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { LoginModule } from "app/login/login.module";
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from "app/home/home.module";
import { PostsDashboardModule } from "app/posts-dashboard/posts-dashboard.module";
import { TipsterModule } from "app/tipsters/tipster.module";
import { UserStatsModule} from "app/user-stats/user-stats.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    HeaderModule,
    LoginModule,
    HomeModule,
    PostsDashboardModule,
    UserStatsModule,
    TipsterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
