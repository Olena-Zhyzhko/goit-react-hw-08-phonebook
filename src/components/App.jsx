// import { useState, useEffect } from "react";
import { ContactsList } from 'components/ContactsList'
import { ContactForm } from 'components/Form'
import { Filter } from 'components/Filter'
import { Container } from 'components/App.styled'
import { useSelector } from "react-redux";
// import { filter } from '../redux/filterSlice'



export function App() {
  const filterName = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);


  // const [contacts, setContacts] = useState([]);
  //   () => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]
  // });
  
  // const [filter, setFilter] = useState('');

  // function addContact(newContact) {
  //   setContacts(prevState => [...prevState, newContact])
  // };

  // const removeContact = (id) => {
  //   setContacts(prevState => prevState.filter((contact) =>
  //       contact.id !== id))
  // }

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setFilter(value);
  // };
  
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
console.log(contactsAfterFilter)

  // const cleanFilter = () => {
  //   setFilter('')
  // }

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts])
  

  return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter  />
      <ContactsList
        contacts={contactsAfterFilter}
      />
      </Container>
    );  
}