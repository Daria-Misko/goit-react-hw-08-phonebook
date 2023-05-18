// import { UserMenu } from '../UserMenu/UserMenu';
// import { useAuth } from 'hooks';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styles';
// import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Header>
      Header
      <Navigation />
      {/* <AuthNav /> */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </Header>
  );
};
