import React, { Component } from "react";
import { nanoid } from 'nanoid'

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
        console.log(e);
        const { name, number } = this.state;
        this.props.onSubmit({name, number, id: nanoid()})
        console.log(name);
        this.setState({
            name: '',
            number: '',
        })
        // e.form.input.value = "";
    };
    
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameId}>Name</label>
            <input
              id={this.nameId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
              onChange={this.handleChange}              
            />
            <label htmlFor={this.numberId}>Phone number</label>
            <input
                id={this.numberId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleChange}
            />
            <button type="submit">Add contact</button>
          </form>
    );
  };
}