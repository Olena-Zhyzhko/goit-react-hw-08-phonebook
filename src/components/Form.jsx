import { useState } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import { Form, Lable, Input, BtnForm } from 'components/Form.styled'
import { useSelector, useDispatch } from "react-redux";
import { addContact } from '../redux/contactsSlice'

export function ContactForm() {
    const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

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
        // const { name, number } = this.state;

        if (contacts.some(contact => contact.name === name)) {
            alert(`${name} is already in contacts`);
            return
        }

      dispatch(addContact(name, number))
        // onSubmit({ id: nanoid(), name, number });
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


// export class ContactForm extends Component {
    // state = {
    //     name: '',
    //     number: '',
    // };

    // nameId = nanoid();
    // numberId = nanoid();

    // handleChange = (e) => {
    //     const { name, value } = e.target;
    //     this.setState({
    //         [name]: value
    //     })
    // };
    
//     handleSubmit = (e) => {
//         e.preventDefault();
//         const { name, number } = this.state;

//         if (this.props.contacts.some(contact => contact.name === name)) {
//             alert(`${name} is already in contacts`);
//             return
//         }

//         this.props.onSubmit({ id: nanoid(), name, number });
//         this.setState({
//             name: '',
//             number: '',
//         })
//     };
    
//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//             <Lable htmlFor={this.nameId}>Name</Lable>
//             <Input
//               id={this.nameId}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 value={this.state.name}
//               onChange={this.handleChange}              
//             />
//             <Lable htmlFor={this.numberId}>Phone number</Lable>
//             <Input
//                 id={this.numberId}
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 value={this.state.number}
//                 onChange={this.handleChange}
//             />
//             <BtnForm type="submit">Add contact</BtnForm>
//         </Form>
//     );
//   };
// }

// ContactForm.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.exact({ 
//         id: PropTypes.string.isRequired, 
//         name: PropTypes.string.isRequired, 
//         number: PropTypes.string.isRequired,
//         } )),
//     onSubmit: PropTypes.func.isRequired,
// }