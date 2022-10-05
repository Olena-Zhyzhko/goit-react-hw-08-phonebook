import { useState } from "react";
import { ContactsList } from 'components/ContactsList'
import { ContactForm } from 'components/Form'
import { Filter } from 'components/Filter'
import {Container} from 'components/App.styled'


export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    setContacts(prevState => [...prevState, newContact],
    )
  }

  const removeContact = (id) => {
    setContacts(prevState => prevState.filter((contact) =>
        contact.id !== id)
    )
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };
  
  const getFilterContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filtredContacts = contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter));
    return filtredContacts;
  };

    const contactsAfterFilter = getFilterContacts();


  const cleanFilter = () => {
    setFilter('')
  }

  return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange} cleanFilter={cleanFilter} />
          <ContactsList contacts={contactsAfterFilter} removeContact={removeContact} />
      </Container>
    );  
}