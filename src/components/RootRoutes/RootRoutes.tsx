import React, { FC } from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { ERoutesNames, privateRoutes, publicRoutes } from '../../constants/routes';

const RootRoutes: FC = () => {
  const ga = getAuth();
  const [user] = useAuthState(ga);

  return (
    <Layout>
      {user ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
          <Route path="*" element={<Navigate to={ERoutesNames.HOME} />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
          <Route path="*" element={<Navigate to={ERoutesNames.AUTH} />} />
        </Routes>
      ) }
    </Layout>
  );
};

export default RootRoutes;
