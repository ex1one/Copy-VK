import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from '../../constants/routes';
import Layout from '../Layout/Layout';

const EventRoutes: FC = () => {
  const isAuth = true;
  return (
    <Routes>
      {routes.map((route) => {
        if (route.auth && !isAuth) {
          return false;
        }

        return (
          <Route
            path={route.path}
            key={route.path}
            element={(
              <Layout>
                <route.element />
              </Layout>
            )}
          />
        );
      })}
    </Routes>
  );
};

export default EventRoutes;
