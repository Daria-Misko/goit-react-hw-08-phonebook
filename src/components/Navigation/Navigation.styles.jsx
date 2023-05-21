import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  text-decoration: none;

  text-align: center;
  min-width: 60px;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  color: #75706c;
  background: transparent;

  outline: none;
  cursor: pointer;

  border: solid 1px #b3aca7;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    background: #b3aca7;
    color: #e2dedb;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  gap: 5px;
`;

export { NavContainer, StyledLink };
