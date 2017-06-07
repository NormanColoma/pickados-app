import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsterComponent } from "app/tipsters/containers/tipster.component";
import { TipsterDetailComponent} from "app/tipsters/components/tipster-detail/tipster-detail.component";
import { TipstersService } from 'app/tipsters/tipsters.service';

@NgModule({
    declarations : [
        TipsterComponent, TipsterDetailComponent, TipstersService
    ],
    imports: [
        CommonModule
    ],
    exports: [

    ]
})

export class TipsterModule {}
