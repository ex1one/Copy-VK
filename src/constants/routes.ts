import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Messages from '../pages/Messages/Messages';
import Conversation from '../pages/Conversation/Conversation';
import Friends from '../pages/Friends/Friends';
import Auth from '../pages/Auth/Auth';
import Login from '../pages/Login/Login';

export interface IRoute {
  path: string;
  element: () => JSX.Element
}

export enum ERoutesNames {
  HOME = '/',
  PROFILE = '/profile/:id',
  MESSAGES = '/messages', // УБРАТЬ
  CONVERSATION = '/messages/:id',
  FRIENDS = '/friends/:id',
  AUTH = '/auth',
  LOGIN = '/login',
}

export const publicRoutes:IRoute[] = [
  {
    path: ERoutesNames.AUTH,
    element: Auth,
  },
  {
    path: ERoutesNames.LOGIN,
    element: Login,
  },
];

export const privateRoutes:IRoute[] = [
  {
    path: ERoutesNames.HOME,
    element: Home,
  },
  {
    path: ERoutesNames.PROFILE,
    element: Profile,
  },
  {
    path: ERoutesNames.MESSAGES,
    element: Messages,
  },
  {
    path: ERoutesNames.CONVERSATION,
    element: Conversation,
  },
  {
    path: ERoutesNames.FRIENDS,
    element: Friends,
  },
];
