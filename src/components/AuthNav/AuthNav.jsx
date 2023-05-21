import { AuthNavCont, StyledLink } from './AuthNav.styles';

export const AuthNav = () => {
  return (
    <AuthNavCont>
      <StyledLink to="/register">Registration</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </AuthNavCont>
  );
};
