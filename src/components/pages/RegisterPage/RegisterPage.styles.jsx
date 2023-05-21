import styled from 'styled-components';

const Form = styled.form`
  width: 500px;
  margin: 0 auto;
  padding: 0;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label``;

const Btn = styled.button`
  width: 492px;
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

  :hover {
    background: #b3aca7;
    color: #e2dedb;
  }
`;

const Input = styled.input`
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  margin: 0;
  padding: 10px;
  width: 470px;
  /* padding: 0px 15px 0px 15px; */

  background: transparent;
  outline: none;
  color: #726659;

  border: solid 1px #b3aca7;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;

  :hover {
    background: #b3aca7;
    color: #e2dedb;
  }
`;

const Title = styled.h2`
  font-family: 'Lato', sans-serif;
  margin: 0 auto;
  margin: 25px 0;
  font-size: 2.3em;
  text-align: center;
  letter-spacing: 7px;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--red);
`;

export { Form, Label, Btn, Input, Title };
