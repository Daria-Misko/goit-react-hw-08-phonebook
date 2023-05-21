// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';
// import { NavLink, Navigate } from 'react-router-dom';
import 'animate.css';

import {
  Hero,
  HeroTitle,
  Herotext,
  LinkWrapper,
  StyledLink,
  Text,
} from './HomePage.styles';

export default function HomePage() {
  return (
    <>
      <Hero>
        <Herotext>
          <HeroTitle className="animate__animated animate__pulse">
            PhoneLink
          </HeroTitle>
          <p className="animate__animated animate__fadeInLeft">
            PhoneLink is your ultimate phone book companion that revolutionizes
            the way you connect and communicate with others. With PhoneLink, you
            have the power to create your own personalized phone book and
            seamlessly access it across all your devices.
          </p>
          <p className="animate__animated animate__fadeInLeft">
            Never worry about losing your contacts again. PhoneLink ensures
            seamless synchronization across all your devices, allowing you to
            access your phone book from your smartphone, tablet, or computer.
          </p>
          <p className="animate__animated animate__fadeInLeft">
            Sharing Made Simple: Share your phone book with family, friends, or
            colleagues effortlessly.
          </p>
          <Text className="animate__animated animate__pulse animate__repeat-2">
            Start to work now!
          </Text>
          <LinkWrapper>
            <StyledLink to="/register">Registration</StyledLink>
            <StyledLink to="/login">Log in</StyledLink>
          </LinkWrapper>
        </Herotext>
        <div className="blob-cont">
          <div className="yellow blob"></div>
          <div className="red blob"></div>
          <div className="green blob"></div>
        </div>
      </Hero>
    </>
  );
}
