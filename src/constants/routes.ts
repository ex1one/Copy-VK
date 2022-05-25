import React from 'react';
import Home from '../pages/Home';

export interface IRoute {
  path: string;
  element: React.ElementType;
  auth: boolean;
}

export enum ERoutesNames {
  HOME = '/',
  PROFILE = '/profile/:id',
  MESSAGES = '/messages',
  CURRENT_MESSAGES = '/messages/:id',
  FRIENDS = '/friends/:id',
}

const routes: IRoute[] = [
  {
    path: ERoutesNames.HOME,
    element: Home,
    auth: false,
  },
  // {
  //   path: ERoutesNames.PROFILE,
  //   element: Home,
  //   auth: true,
  // },
  // {
  //   path: ERoutesNames.MESSAGES,
  //   element: Home,
  //   auth: true,
  // },
  // {
  //   path: ERoutesNames.CURRENT_MESSAGES,
  //   element: Home,
  //   auth: false,
  // },
  // {
  //   path: ERoutesNames.FRIENDS,
  //   element: Home,
  //   auth: false,
  // },
];

export default routes;
