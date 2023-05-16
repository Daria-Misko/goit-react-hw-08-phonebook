import { useSelector, useDispatch } from 'react-redux';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Title, Notification } from './App.styles';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import Loader from './Loader/Loader';

export function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title>Phonebook</Title>
      <ContactsForm />
      {isLoading && <Loader />}
      <Title>Contacts</Title>
      {error && toast.error('Oops...Something went wrong')}
      {contacts.length !== 0 && <Filter />}
      <ContactsList />
      {contacts.length === 0 && (
        <Notification>Contact list is empty =(</Notification>
      )}
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
}
