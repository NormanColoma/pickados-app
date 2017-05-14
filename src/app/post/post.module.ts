import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from "app/post/post.component";
import { PostDetailComponent} from "app/post/post-detail.component";
import { UserPanelComponent} from "app/user-panel/user-panel.component";
@NgModule({
    declarations : [
        PostComponent, PostDetailComponent, UserPanelComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PostComponent
    ]
})

export class PostModule {}
