import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { LoginModule } from "app/login/login.module";
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from "app/home/home.module";
import { PostModule } from "app/post/post.module";
import { UserPanelModule } from "app/user-panel/user-panel.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    LoginModule,
    HomeModule,
    PostModule,
    UserPanelModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
