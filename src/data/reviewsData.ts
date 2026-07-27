import { Review } from '../types';

export const REVIEWS_DATA: Review[] = [
  {
    id: 'r1',
    author: 'The New York Times',
    role: 'Food & Dining Critic',
    rating: 5,
    source: 'Press',
    comment: 'Bricolage brings a vibrant soul to Park Slope. Executive Chef Lien Lin reimagines Vietnamese classics with California grace and Brooklyn grit.',
    date: 'Featured Review',
    featured: true
  },
  {
    id: 'r2',
    author: 'Eater NY',
    role: 'Essential NYC Restaurants',
    rating: 5,
    source: 'Press',
    comment: 'One of New York City’s most memorable back patios combined with irresistible shaking beef and pitch-perfect craft cocktails.',
    date: 'Editor Choice',
    featured: true
  },
  {
    id: 'r3',
    author: 'Michelin Guide',
    role: 'Inspector Comment',
    rating: 5,
    source: 'Press',
    comment: 'The quality of ingredients shines through every claypot dish and bowl of broth. Unpretentious, welcoming, and deeply delicious.',
    date: 'Michelin Recommendation',
    featured: true
  },
  {
    id: 'r4',
    author: 'Sarah M.',
    role: 'Park Slope Local',
    rating: 5,
    source: 'Resy',
    comment: 'The heated back garden is magical during crisp evenings. We ordered the Shaking Beef, Imperial Rolls, and Saigon Sling cocktails. Unbeatable experience!',
    date: '2 weeks ago'
  },
  {
    id: 'r5',
    author: 'David & Alex K.',
    role: 'Verified Diner',
    rating: 5,
    source: 'Google',
    comment: 'Having lived in San Francisco near Slanted Door, Bricolage exceeded every expectation. The Duck Leg Confit Pho broth is medicine for the soul.',
    date: '1 month ago'
  },
  {
    id: 'r6',
    author: 'Elena R.',
    role: 'Food Blogger',
    rating: 5,
    source: 'Yelp',
    comment: 'Best weekend brunch in Brooklyn! The Pandan Waffles with duck confit and Vietnamese iced coffee are worth waiting for.',
    date: '3 weeks ago'
  }
];
