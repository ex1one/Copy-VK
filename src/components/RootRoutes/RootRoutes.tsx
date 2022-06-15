import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { ERoutesNames, privateRoutes, publicRoutes } from '../../constants/routes';
import useTypedSelector from '../../hooks/useTypedSelector';

const RootRoutes = () => {
  const user = useTypedSelector((state) => state.user);

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
