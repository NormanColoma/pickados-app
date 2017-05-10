import { Injectable } from '@angular/core';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {
  getPosts(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }

//   getHeroesSlowly(): Promise<Hero[]> {
//   return new Promise(resolve => {
//     // Simulate server latency with 2 second delay
//     setTimeout(() => resolve(this.getHeroes()), 2000);
//   });
// }
}
