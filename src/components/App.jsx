import { useSelector } from 'react-redux';
// import { ContactsForm } from './ContactsForm/ContactsForm';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Filter } from './Filter/Filter';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Title, Notification } from './App.styles';
// import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { lazy } from 'react';
// import { fetchContacts } from 'redux/operations';
import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import authSelectors from 'redux/auth/authSelectors';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export function App() {
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // return (
  //   <>
  //     <Title>Phonebook</Title>
  //     <ContactsForm />
  //     {isLoading && <Loader />}
  //     <Title>Contacts</Title>
  //     {error && toast.error('Oops...Something went wrong')}
  //     {contacts.length !== 0 && <Filter />}
  //     <ContactsList />
  //     {contacts.length === 0 && (
  //       <Notification>Contact list is empty =(</Notification>
  //     )}
  // 		<ToastContainer position="top-right" autoClose={3000} theme="colored" />
  // 	</>

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}