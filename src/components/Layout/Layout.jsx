import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LayoutContainer } from './Layout.styles';
import { AppBar } from 'components/AppBar/AppBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <LayoutContainer>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </LayoutContainer>
  );
};
