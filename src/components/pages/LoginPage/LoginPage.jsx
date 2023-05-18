// import { Helmet } from 'react-helmet';
// import { LoginForm } from 'components/LoginForm/LoginForm';
import { logIn } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { Btn, Form, Input, Label } from './LoginPage.styles';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Btn type="submit">Log In</Btn>
    </Form>
  );
  // return (
  //   <div>
  //     <Helmet>
  //       <title>LoginPage</title>
  //     </Helmet>
  //     <LoginForm />
  //   </div>
  // );
}
