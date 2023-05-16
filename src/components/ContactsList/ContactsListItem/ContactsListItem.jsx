import PropTypes from 'prop-types';
import { DelButton, ListItem } from './ContactsListItem.styles';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactsListItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      {name}: {phone}
      <DelButton onClick={() => dispatch(deleteContact(id))}>Delete</DelButton>
    </ListItem>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
