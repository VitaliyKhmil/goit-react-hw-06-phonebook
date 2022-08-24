import { FilterLabel, Input } from './ContactsFilter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterItems, getFilterValue } from 'redux/contacts';

export const ContactsFilter = () => {

  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(filterItems(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Search by name:
      <Input
        placeholder="search name..."
        type="text"
        name="name"
        onChange={changeFilter}
        value={filter}
      />
    </FilterLabel>
  );
};

