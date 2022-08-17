import PropTypes from 'prop-types';
import { ContactButton } from 'components/ContactsList/ContactsList.styled';
import { ContactItemLi } from './ContactsList.styled';

export const ContactsList = ({ value, options, onClickDelete }) => {
  const normalizedValue = value.toLowerCase();
  const filteredArray = options.filter(option =>
    option.name.toLowerCase().includes(normalizedValue)
  );

  return (
    <ul>
      {filteredArray.map(({ id, name, number }) => {
        return (
          <ContactItemLi key={id}>
            {name}: {number}
            <ContactButton
              onClick={() => {
                onClickDelete(id);
              }}
            >
              Delete
            </ContactButton>
          </ContactItemLi>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
