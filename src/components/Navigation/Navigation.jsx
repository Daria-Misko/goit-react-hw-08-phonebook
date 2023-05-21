import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

import { NavContainer, StyledLink } from './Navigation.styles';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <NavContainer>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </NavContainer>
  );
};
