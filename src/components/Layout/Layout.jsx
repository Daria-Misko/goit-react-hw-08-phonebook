import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LayoutContainer } from './Layout.styles';
import { AppBar } from 'components/AppBar/AppBar';

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
