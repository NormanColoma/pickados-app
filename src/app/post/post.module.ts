import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from "app/post/post.component";
import { PostDetailComponent} from "app/post/post-detail.component";
import { UserPanelModule} from "app/user-panel/user-panel.module";
@NgModule({
    declarations : [
        PostComponent, PostDetailComponent
    ],
    imports: [
        CommonModule, UserPanelModule
    ],
    exports: [
        PostComponent
    ]
})

export class PostModule {}
