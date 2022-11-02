import React from 'react'
import { List, Item, BtnDelete } from 'components/ContactsList.styled';
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from '../redux/contactsSlice'
import { getContacts, getStatusFilter } from '../redux/selectors'
import { useEffect } from 'react';
import * as contactsOpetations from 'redux/contacts/contactsOperations'

export const ContactsList = () => {
    const dispatch = useDispatch();
    const filterName = useSelector(getStatusFilter);
    const contacts = useSelector(getContacts);
  
    console.log(contacts)

    useEffect(() => { dispatch(contactsOpetations.fetchContacts()) }, [dispatch]);

//     useEffect(() => {
//         const contactsAfterFilter = getFilterContacts();
//  // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, [contacts]);


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
// console.log(contactsAfterFilter)

    return (
        <List>
            { contactsAfterFilter.map(({ id, name, phone }) => (
                <Item key={id}>{name}: {phone}
                    <BtnDelete type='button' onClick={() => dispatch(contactsOpetations.deleteContact(id))}>Delete</BtnDelete>
                </Item>
            ))}
        </List>
    )
  }
