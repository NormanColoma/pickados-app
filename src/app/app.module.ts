import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from "app/home/home.module";
import { PostsDashboardModule } from "app/posts-dashboard/posts-dashboard.module";
import { TipsterModule } from "app/tipsters/tipster.module";
import { UserStatsModule} from "app/user-stats/user-stats.module";
import { UserAccountModule } from "app/user-account/user-account.module";
import { UserAccountService } from "app/user-account/user-account.service";
import { UserDashboardModule } from "app/user-dashboard/user-dashboard.module";

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
    HomeModule,
    PostsDashboardModule,
    UserStatsModule,
    TipsterModule,
    UserDashboardModule,
    UserAccountModule,
    AppRoutingModule
  ],
  providers: [
    UserAccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
