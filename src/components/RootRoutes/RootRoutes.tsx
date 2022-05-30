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
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={
                route.path && !user ? (
                  <Registration />
                ) : (
                  <route.element />
                )
}
          />
        ))}
        <Route path="*" element={<Navigate to={ERoutesNames.HOME} />} />
      </Routes>
    </Layout>

  );
};

export default RootRoutes;
