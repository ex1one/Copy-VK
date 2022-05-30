import React, { FC } from 'react';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import routes, { ERoutesNames } from '../../constants/routes';
import Layout from '../Layout/Layout';
import Registration from '../Registration/Registration';

const RootRoutes: FC = () => {
  const ga = getAuth();
  const [user, loading, error] = useAuthState(ga);

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          key={route.path}
          element={(
            <Layout>
              {route.path && !user ? (
                <Registration />
              ) : (
                <route.element />
              )}
            </Layout>
        )}
        />
      ))}
      <Route path="*" element={<Navigate to={ERoutesNames.HOME} />} />
    </Routes>
  );
};

export default RootRoutes;
