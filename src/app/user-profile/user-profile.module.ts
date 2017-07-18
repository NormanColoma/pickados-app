import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from "app/user-profile/containers/user-profile.component";
import { TipsterDetailComponent} from "app/tipsters/components/tipster-detail/tipster-detail.component";
import { SearchFormComponent} from "app/tipsters/components/search-form/search-form.component";
import { ModalComponent } from "app/tipsters/components/modal/modal.component";
import { TipstersService } from "app/tipsters/tipsters.service";


@NgModule({
    declarations : [
        UserProfileComponent
    ],
    imports: [
        CommonModule, BrowserModule, FormsModule, RouterModule
    ],
    providers: [
       TipstersService
    ],
    exports: [

    ]
})

export class UserProfileModule {}
