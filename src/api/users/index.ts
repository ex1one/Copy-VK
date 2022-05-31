import { IUser } from './types';
import logo from '../../../public/img/1.jpg';

const fetchUsers: IUser[] = [
  {
    uid: 'ex1one',
    avatar: logo,
    displayName: 'Ilya Rogachev',
    isInNetwork: false,
  },
  {
    uid: 'Ksenia',
    avatar: logo,
    displayName: 'Ksenia',
    isInNetwork: false,
  },
  {
    uid: 'Natasha',
    avatar: logo,
    displayName: 'Natasha',
    isInNetwork: true,
  },
];

export default fetchUsers;
