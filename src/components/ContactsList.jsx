import React from 'react'
import { List, Item, BtnDelete } from 'components/ContactsList.styled';
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from '../redux/contactsSlice'
import { getContacts, getStatusFilter } from '../redux/selectors'


export const ContactsList = () => {
    const dispatch = useDispatch();
    const filterName = useSelector(getStatusFilter);
    const contacts = useSelector(getContacts);
  
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


    return (
        <List>
            {contactsAfterFilter.map(({ id, name, number }) => (
                <Item key={id}>{name}: {number}
                    <BtnDelete type='button' onClick={() => dispatch(removeContact(id))}>Delete</BtnDelete>
                </Item>
            ))}
        </List>
    )
  }
