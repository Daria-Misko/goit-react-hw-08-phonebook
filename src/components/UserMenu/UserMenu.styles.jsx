import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 10px;
`;

export const UserName = styled.p`
  font-family: 'Lato', sans-serif;
  letter-spacing: 7px;
`;

export const LogOutBtn = styled.button`
  text-decoration: none;

  text-align: center;
  min-width: 60px;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  color: #e2dedb;
  background: #b3aca7;

  outline: none;
  cursor: pointer;

  border: solid 1px #b3aca7;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    background: #75706c;
    color: #e2dedb;
  }
`;
