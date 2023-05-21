import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import 'animate.css';

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-left: 16px;
  width: 100%;
  height: 130%;
  gap: 3em;
  background: linear-gradient(to right, #b3aca7 1px, transparent 1px) 0 0,
    linear-gradient(to right, #b3aca7 1px, transparent 1px) 0 100%,
    linear-gradient(to left, #b3aca7 1px, transparent 1px) 100% 0,
    linear-gradient(to left, #b3aca7 1px, transparent 1px) 100% 100%,
    linear-gradient(to bottom, #b3aca7 1px, transparent 1px) 0 0,
    linear-gradient(to bottom, #b3aca7 1px, transparent 1px) 100% 0,
    linear-gradient(to top, #b3aca7 1px, transparent 1px) 0 100%,
    linear-gradient(to top, #b3aca7 1px, transparent 1px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 20px 20px;
`;

const HeroTitle = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 50px;
  color: #eb6666a8;
  margin: 0;
`;

const Herotext = styled.div`
  max-width: 505px;
  line-height: 1.4;

  padding-left: 16px;
  p:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Text = styled.p`
  color: #eb6666a8;
  margin: 0;
  padding: 0;
  align-items: center;
  /* text-transform: uppercase; */
  font-weight: 600;
  --animate-repeat: 5;
`;

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
    background: var(--bg);
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export { Hero, HeroTitle, Herotext, Text, StyledLink, LinkWrapper };
