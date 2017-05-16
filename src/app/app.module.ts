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
import { PostModule } from "app/post/post.module";
import { UserPanelModule } from "app/user-panel/user-panel.module";
import { RatioChartModule} from "app/stats/ratio-chart.module";
import { StatsModule} from "app/stats/stats.module";
import { TipsterModule } from "app/tipsters/tipster.module";

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
    PostModule,
    StatsModule,
    UserPanelModule,
    RatioChartModule,
    TipsterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
