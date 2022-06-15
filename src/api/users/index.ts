import { IUser } from './types';
import logo from '../../../public/img/1.jpg';

const fetchUsers: IUser[] = [
  {
    id: 'ex1one',
    avatar: logo,
    displayName: 'Ilya Rogachev',
    isInNetwork: false,
  },
  {
    id: 'Ksenia',
    avatar: logo,
    displayName: 'Ksenia',
    isInNetwork: false,
  },
  {
    id: 'Natasha',
    avatar: logo,
    displayName: 'Natasha',
    isInNetwork: true,
  },
];

export default fetchUsers;
