import { Container, Title } from 'components/ui/Container';
import { ContactForm } from 'components/ContactsForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';


export const App = () => {
   
    return (
      <Container>
        <Title>Phonebook</Title>

        <ContactForm />
        
        <Title>Contacts</Title>

        <ContactsFilter />

        <ContactsList />
        
      </Container>
    );
  }