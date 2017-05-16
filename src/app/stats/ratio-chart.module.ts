import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RatioChartComponent } from "app/stats/ratio-chart.component";
@NgModule({
    declarations : [
        RatioChartComponent
    ],
    imports: [
        CommonModule, ChartsModule
    ],
    exports: [
        RatioChartComponent
    ]
})

export class RatioChartModule {}
