import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsDashboardComponent } from "app/posts-dashboard/containers/posts-dashboard.component";
import { PostDetailComponent} from "app/posts-dashboard/components/post-detail/post-detail.component";
import { UserPanelComponent} from "app/posts-dashboard/components/user-panel/user-panel.component";
@NgModule({
    declarations : [
        PostsDashboardComponent, PostDetailComponent, UserPanelComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
    ]
})

export class PostsDashboardModule {}
