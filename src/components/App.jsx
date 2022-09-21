import React, { Component } from "react";
import { ContactsList } from 'components/ContactsList'
import { ContactForm } from 'components/Form'
import { Filter } from 'components/Filter'


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
 
  render() {
    const contacts = this.getFilterContacts();
    return (
      <div style={{
        padding: 20,
        // color: '#010101'
      }}>
        <h1>Phonebook</h1>
        <ContactForm contacts={this.state.contacts} onSubmit={this.addContact} />

        <h2>Contacts</h2>
          <Filter filter={this.filter} handleChange={this.handleChange} />
          <ContactsList contacts={contacts} removeContact={this.removeContact} />
      </div>
    );
  };
}