import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickSummaryComponent } from "app/stats/pick-summary.component";

@NgModule({
    declarations : [
        PickSummaryComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PickSummaryComponent
    ]
})

export class PickSummaryModule {
  
}
