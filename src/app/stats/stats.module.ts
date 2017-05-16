import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { StatsComponent } from "app/stats/stats.component";
import { RatioChartModule } from "app/stats/ratio-chart.module";

@NgModule({
    declarations : [
        StatsComponent
    ],
    imports: [
        CommonModule, ChartsModule, RatioChartModule
    ],
    exports: [
        StatsComponent
    ]
})

export class StatsModule {}
