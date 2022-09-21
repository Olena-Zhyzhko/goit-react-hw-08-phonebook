import React, { Component } from "react";
import { nanoid } from 'nanoid'
import { Form, Lable, Input, BtnForm } from 'components/Form.styled'


export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    nameId = nanoid();
    numberId = nanoid();

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        this.props.onSubmit({ name, number, id: nanoid() });
        
        if (this.props.contacts.some(contact => contact.name === name)) {
            alert(`${name} is already in contacts`)
        }

        this.setState({
            name: '',
            number: '',
        })
    };
    
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
            <Lable htmlFor={this.nameId}>Name</Lable>
            <Input
              id={this.nameId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
              onChange={this.handleChange}              
            />
            <Lable htmlFor={this.numberId}>Phone number</Lable>
            <Input
                id={this.numberId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleChange}
            />
            <BtnForm type="submit">Add contact</BtnForm>
        </Form>
    );
  };
}