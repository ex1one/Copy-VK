import { IUser } from './types';
import logo from '../../../public/img/1.jpg';

const fetchUsers: IUser[] = [
  {
    _id: 'dada',
    avatar: logo,
    name: 'Ilya Rogachev',
    isInNetwork: false,
  },
  {
    _id: '3131',
    avatar: logo,
    name: 'Ilya Gorbachev',
    isInNetwork: true,
  },
];

export default fetchUsers;
