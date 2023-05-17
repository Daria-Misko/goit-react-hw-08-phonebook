import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { LayoutContainer } from './Layout.styles';

export const Layout = () => {
  return (
    <LayoutContainer>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};
