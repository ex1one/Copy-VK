import React, {
  createContext, FC, useEffect, useState,
} from 'react';
import { getAuth, onAuthStateChanged, Auth } from 'firebase/auth';
import { IUser, TypeSetState } from '../api/users/types';
import users from '../api/users';

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>
  ga: Auth // getAuth
}

export const AuthContext = createContext<IContext>({} as IContext);

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const ga = getAuth();

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (userAuth) => setUser(userAuth ? {
      _id: userAuth.uid,
      avatar: users[1].avatar,
      name: userAuth?.displayName || '',
    } : null));
    return () => {
      unListen();
    };
  }, []);

  const values = React.useMemo(() => ({
    user, setUser, ga,
  }), [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, ga }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
