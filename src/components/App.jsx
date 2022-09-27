import React, { Component } from "react";
import { ContactsList } from 'components/ContactsList'
import { ContactForm } from 'components/Form'
import { Filter } from 'components/Filter'
import {Container} from 'components/App.styled'


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };


  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }
    ))
  }

  removeContact = (id) => {
    this.setState((prevState) => {
      const newContacts = prevState.contacts.filter((contact) =>
        contact.id !== id);
      return { contacts: newContacts };
    })
  }

  handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
  };
  
  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filtredContacts = contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter));
    return filtredContacts;
  };

  cleanFilter = () => {
    this.setState({
            filter: '',
        })
  }
 
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    this.setState({
      contacts: parsedContacts,
    })
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


  render() {
    const contacts = this.getFilterContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm contacts={this.state.contacts} onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.filter} handleChange={this.handleChange} cleanFilter={this.cleanFilter} />
          <ContactsList contacts={contacts} removeContact={this.removeContact} />
      </Container>
    );
  };
}