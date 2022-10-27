import { ContactsList } from 'components/ContactsList'
import { ContactForm } from 'components/Form'
import { Filter } from 'components/Filter'
import { Container } from 'components/App.styled'
import { useSelector } from "react-redux";
import { getContacts, getStatusFilter } from '../redux/selectors'


export function App() {
  const filterName = useSelector(getStatusFilter);
  const contacts = useSelector(getContacts);
  
  const getFilterContacts = () => {
    if (!filterName) {
      return contacts;
    }
    const normalizedFilter = filterName.toLocaleLowerCase();
    const filtredContacts = contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter));
    return filtredContacts;
  };

  const contactsAfterFilter = getFilterContacts();

  return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter  />
      <ContactsList contacts={contactsAfterFilter} />
      </Container>
    );  
}