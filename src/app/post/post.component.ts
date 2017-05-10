import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
    providers: [PostService],
    selector: 'post-component',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit{
  posts: Post[];

  ngOnInit(): void {
    this.getPosts();
  }

  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService.getPosts().then(posts => this.posts = posts);
  }
}
