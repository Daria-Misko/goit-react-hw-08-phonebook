// import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Btn, Form, Input, Label } from './RegisterPage.styles';
// import { Helmet } from 'react-helmet';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Btn type="submit">Register</Btn>
    </Form>
  );
}
