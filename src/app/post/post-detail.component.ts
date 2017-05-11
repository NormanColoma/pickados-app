import { Component, Input  } from '@angular/core';
import { Post} from './Post';

@Component({
  selector: 'post-detail-component',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  @Input() post: Post;
}
