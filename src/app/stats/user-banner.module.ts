import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBannerComponent } from "app/stats/user-banner.component";

@NgModule({
    declarations : [
        UserBannerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UserBannerComponent
    ]
})

export class UserBannerModule {}
