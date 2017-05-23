import { Post } from './post';

export const POSTS: Post[] = [
  {username: 'Jaro', date: '05/05/2017', pick_event: 'Elche - Hercules', pick_date: '10/05/2017', pick_result: 'empate', stake: 1, odd: 3, sport: 'football', state: 'pending'},
  {username: 'Norman', date: '06/05/2017', pick_event: 'Madrid - Barça', pick_date: '12/05/2017', pick_result: 'Barça +3,5 goles', stake: 2, odd: 5, sport: 'football', state: 'won'},
  {username: 'Jaro', date: '06/05/2017', pick_event: 'Villarreal-Leganes', pick_date: '11/05/2017', pick_result: 'Villarreal', stake: 10, odd: 2, sport: 'football', state: 'lost'}
];
