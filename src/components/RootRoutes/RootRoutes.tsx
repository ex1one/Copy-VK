import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from '../../constants/routes';
import Layout from '../Layout/Layout';
import useAuth from '../../hooks/useAuth';
import Auth from '../../pages/Auth/Auth';

const RootRoutes: FC = () => {
  const { user } = useAuth();
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          key={route.path}
          element={(
            <Layout>
              {route.path && !user ? (
                <Auth />
              ) : (
                <route.element />
              )}
            </Layout>
            )}
        />
      ))}
    </Routes>
  );
};

export default RootRoutes;
