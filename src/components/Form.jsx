import { useState } from "react";
import { nanoid } from 'nanoid'
import { Form, Lable, Input, BtnForm } from 'components/Form.styled'
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from '../redux/selectors'
import * as contactsOpetations from 'redux/contacts/contactsOperations'


export function ContactForm() {
    const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

    const nameId = nanoid();
    const numberId = nanoid();

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
          
      default:
        return;
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (contacts.some(contact => contact.name === name)) {
            alert(`${name} is already in contacts`);
            return
        }

      dispatch(contactsOpetations.addContact({ name, number }))
        setName('');
        setNumber('');
    };

  return (
        <Form onSubmit={handleSubmit}>
            <Lable htmlFor={nameId}>Name</Lable>
            <Input
              id={nameId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
              onChange={handleChange}              
            />
            <Lable htmlFor={numberId}>Phone number</Lable>
            <Input
                id={numberId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleChange}
            />
            <BtnForm type="submit">Add contact</BtnForm>
        </Form>  )
}
