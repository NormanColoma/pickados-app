import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsterComponent } from "app/tipsters/tipster.component";

@NgModule({
    declarations : [
        TipsterComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TipsterComponent
    ]
})

export class TipsterModule {}
