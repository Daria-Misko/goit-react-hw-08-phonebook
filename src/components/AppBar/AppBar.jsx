// import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
import { Header } from './AppBar.styles';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Header>
      Header
      {/* <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </Header>
  );
};
