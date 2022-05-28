import React, {
  createContext, FC, useEffect, useState,
} from 'react';
import { getAuth, onAuthStateChanged, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { IUser, TypeSetState } from '../api/users/types';
import users from '../api/users';

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga: Auth; // getAuth
  db: Firestore
}

export const AuthContext = createContext<IContext>({} as IContext); // Подумать над этим, мб я заменю это на Redux

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const ga = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (userAuth) => {
      if (userAuth) {
        setUser({
          _id: userAuth.uid,
          avatar: users[0].avatar,
          name: userAuth.displayName || '',
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      unListen();
    };
  }, []);

  const values = React.useMemo(() => ({
    user, setUser, ga, db,
  }), [db, ga, user]);

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
