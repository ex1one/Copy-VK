import * as Icons from '@mui/icons-material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

export interface IMenu {
  title: string;
  link: string;
  icon: OverridableComponent<SvgIconTypeMap>
}

const menu: IMenu[] = [
  {
    title: 'Моя страница',
    link: '/profile',
    icon: Icons.Home,
  },
  {
    title: 'Друзья',
    link: '/friends',
    icon: Icons.People,
  },
  {
    title: 'Новости',
    link: '/',
    icon: Icons.Article,
  },
];

export default menu;
