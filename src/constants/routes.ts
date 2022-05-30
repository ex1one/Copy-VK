import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Messages from '../pages/Messages/Messages';
import Conversation from '../pages/Conversation/Conversation';
import Friends from '../pages/Friends/Friends';
import Auth from '../pages/Auth/Auth';
import Registration from '../components/Registration/Registration';

export interface IRoute {
  path: string;
  element: () => JSX.Element
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
  {
    path: ERoutesNames.AUTH,
    element: Auth,
  },
  {
    path: ERoutesNames.REG,
    element: Registration,
  },
];

export default routes;
