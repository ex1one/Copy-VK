import React from 'react';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Messages from '../pages/Messages/Messages';
import Conversation from '../pages/Conversation/Conversation';
import Friends from '../pages/Friends/Friends';
import Auth from '../pages/Auth/Auth';
import Registration from '../components/Registration/Registration';

export interface IRoute {
  path: string;
  element: React.ElementType;
  auth: boolean;
}

export enum ERoutesNames {
  HOME = '/',
  PROFILE = '/profile/:id',
  MESSAGES = '/messages',
  CONVERSATION = '/messages/:id',
  FRIENDS = '/friends/:id',
  AUTH = '/auth',
  REG = '/reg',
}

const routes: IRoute[] = [
  {
    path: ERoutesNames.HOME,
    element: Home,
    auth: true,
  },
  {
    path: ERoutesNames.PROFILE,
    element: Profile,
    auth: true,
  },
  {
    path: ERoutesNames.MESSAGES,
    element: Messages,
    auth: true,
  },
  {
    path: ERoutesNames.CONVERSATION,
    element: Conversation,
    auth: false,
  },
  {
    path: ERoutesNames.FRIENDS,
    element: Friends,
    auth: false,
  },
  {
    path: ERoutesNames.AUTH,
    element: Auth,
    auth: false,
  },
  {
    path: ERoutesNames.REG,
    element: Registration,
    auth: false,
  },
];

export default routes;
