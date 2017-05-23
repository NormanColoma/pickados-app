import { Component, OnInit } from '@angular/core';
import { Post } from 'app/post/post';
import { PostService } from 'app/post/post.service';

@Component({
    providers: [PostService],
    selector: 'pick-summary',
    templateUrl: './pick-summary.component.html'
})

export class PickSummaryComponent implements OnInit{
  posts: Post[];

  ngOnInit(): void {
    this.getPosts();
  }

  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService.getPosts().then(posts => this.posts = posts);
  }
}
