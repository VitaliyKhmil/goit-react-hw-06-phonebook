import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { Container, Title } from 'components/ui/Container';
import { ContactForm } from 'components/ContactsForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';


export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
  
  const handlerFilter = e => {
    const { value } = e.currentTarget;
  setFilter(value);
  };

 
 const handlerSubmit = data => {
    contacts.find(contact => contact.name === data.name)
      ? Notify.warning(`${data.name} is already in contacts`)
      : setContacts(prevContacts => [...prevContacts, data]);
  };
  
    return (
      <Container>
        <Title>Phonebook</Title>

        <ContactForm onSubmit={handlerSubmit} />
        <Title>Contacts</Title>

        <ContactsFilter
          value={filter}
          onChange={handlerFilter}
        />

        <ContactsList
          value={filter}
          options={contacts}
          onClickDelete={deleteContact}
        />
      </Container>
    );
  }