import { Form, Input } from 'components/ContactsForm/ContactsForm.styles';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <Form>
      <label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </Form>
  );
};
