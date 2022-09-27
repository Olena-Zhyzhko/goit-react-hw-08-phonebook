import React from 'react'
import PropTypes from 'prop-types';
import { List, Item, BtnDelete } from 'components/ContactsList.styled'


export const ContactsList = ({ contacts, removeContact }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <Item key={id}>{name}: {number}
                    <BtnDelete type='button' onClick={() => removeContact(id)}>Delete</BtnDelete>
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
    removeContact: PropTypes.func.isRequired,
}