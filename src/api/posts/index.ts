import { IPosts } from './types';
import logo1 from '../../../public/img/1.jpg';
import logo2 from '../../../public/img/2.jpg';
import logo3 from '../../../public/img/3.jpg';

const fetchPosts: IPosts[] = [
  {
    author: {
      _id: 'da',
      avatar: logo3,
      name: 'Спишь?',
    },
    content: 'Я не сплю',
    createdAt: '15 минут назад',
    images: [
      logo2,
      logo3,
    ],
  },
];

export default fetchPosts;
