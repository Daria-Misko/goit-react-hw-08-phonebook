import { ContactsListItem } from './ContactsListItem/ContactsListItem';
import { List } from './ContactsList.styles';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactsList = () => {
  const contactsList = useSelector(selectVisibleContacts);

  if (!contactsList.length) return;
  return (
    <List>
      {contactsList.map(contact => (
        <ContactsListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
