import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {
  getUserById(username: string): Promise<User> {
    let user_result = USERS.find(i => i.username === username);
    return Promise.resolve(user_result);
  }
}
