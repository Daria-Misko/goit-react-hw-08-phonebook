export const selectContacts = ({ contacts: { items } }) => items;
export const selectFilter = ({ filter }) => filter;
export const selectIsLoading = ({ contacts: { isLoading } }) => isLoading;
export const selectError = ({ contacts: { err } }) => err;

export const selectVisibleContacts = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
