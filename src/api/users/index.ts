import { IUser } from './types';
import logo from '../../../public/img/1.jpg';

const fetchUsers: IUser[] = [
  {
    uid: 'ex1one',
    avatar: logo,
    displayName: 'Ilya Rogachev',
    isInNetwork: false,
  },
];

export default fetchUsers;
