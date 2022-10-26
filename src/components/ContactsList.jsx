import React from 'react'
import PropTypes from 'prop-types';
import { List, Item, BtnDelete } from 'components/ContactsList.styled';
import { useDispatch } from "react-redux";
import { removeContact } from '../redux/contactsSlice'



export const ContactsList = ({ contacts }) => {
    const dispatch = useDispatch();
    // const contacts = useSelector(state => state.contacts);

    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <Item key={id}>{name}: {number}
                    <BtnDelete type='button' onClick={() => dispatch(removeContact(id))}>Delete</BtnDelete>
                </Item>
            ))}
        </List>
    )
  }

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({ 
        id: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired, 
        number: PropTypes.string.isRequired,
        } )),
    // removeContact: PropTypes.func.isRequired,
}