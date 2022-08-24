import { ContactButton } from 'components/ContactsList/ContactsList.styled';
import { ContactItemLi } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { remove, getFilterValue, getItemsValue } from 'redux/contacts';

export const ContactsList = () => {
 const filter = useSelector(getFilterValue);
 const states = useSelector(getItemsValue);
 const dispatch = useDispatch();


  const normalizedValue = filter.toLowerCase();
  const filteredArray = states?.filter(state =>
    state?.name.toLowerCase().includes(normalizedValue)
  );

  const deleteContact = contactId => {
    dispatch(remove(contactId));
  };

  return (
    <ul>
      {filteredArray.map(({ id, name, number }) => {
        return (
          <ContactItemLi key={id}>
            {name}: {number}
            <ContactButton
              onClick={() => {
                deleteContact(id);
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
