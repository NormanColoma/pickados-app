import { Component, Input  } from '@angular/core';
import { Post} from 'app/posts-dashboard/services/post';

@Component({
  selector: 'post-detail-component',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  @Input() post: Post;
}
