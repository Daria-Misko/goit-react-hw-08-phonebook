import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import Loader from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { Title } from 'components/App.styles';
import { Notification } from './ContactsPage.styles';

export default function ContactsPage() {
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
