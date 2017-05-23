import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { UserStatsComponent } from "app/user-stats/containers/user-stats.component";
import { RatioChartComponent } from "app/user-stats/components/ratio-chart/ratio-chart.component";
import { PickSummaryComponent } from "app/user-stats/components/pick-summary/pick-summary.component";
import { UserBannerComponent } from "app/user-stats/components/user-banner/user-banner.component";

@NgModule({
    declarations : [
        UserStatsComponent,
        RatioChartComponent,
        PickSummaryComponent,
        UserBannerComponent
    ],
    imports: [
        CommonModule, ChartsModule
    ],
    exports: [

    ]
})

export class UserStatsModule {}
