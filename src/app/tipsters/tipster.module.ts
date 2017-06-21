import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsterComponent } from "app/tipsters/containers/tipster.component";
import { TipsterDetailComponent} from "app/tipsters/components/tipster-detail/tipster-detail.component";
import { SearchFormComponent} from "app/tipsters/components/search-form/search-form.component";
import { TipstersService } from "app/tipsters/tipsters.service";

@NgModule({
    declarations : [
        TipsterComponent, TipsterDetailComponent, SearchFormComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
       TipstersService
    ],
    exports: [

    ]
})

export class TipsterModule {}
