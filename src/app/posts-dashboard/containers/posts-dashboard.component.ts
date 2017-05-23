import { Component, OnInit } from '@angular/core';
import { Post } from 'app/posts-dashboard/services/post';
import { PostService } from 'app/posts-dashboard/services/post.service';

@Component({
    providers: [PostService],
    selector: 'posts-dashboard',
    templateUrl: './posts-dashboard.component.html',
    styleUrls: ['./posts-dashboard.component.css']
})

export class PostsDashboardComponent implements OnInit{
  posts: Post[];

  ngOnInit(): void {
    this.getPosts();
  }

  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService.getPosts().then(posts => this.posts = posts);
  }
}
