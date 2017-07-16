import { Component, Input  } from '@angular/core';
// import { Post} from 'app/posts-dashboard/services/post';

@Component({
  selector: 'tipster-detail',
  templateUrl: './tipster-detail.component.html',
  styleUrls: ['./tipster-detail.component.css']
})
export class TipsterDetailComponent {
  @Input() tipster: any;
}
