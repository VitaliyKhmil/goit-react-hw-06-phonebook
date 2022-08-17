import PropTypes from 'prop-types';
import { FilterLabel, Input } from './ContactsFilter.styled';

export const ContactsFilter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Search by name:
      <Input
        placeholder="search name..."
        type="text"
        name="name"
        onChange={onChange}
        value={value}
      />
    </FilterLabel>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
