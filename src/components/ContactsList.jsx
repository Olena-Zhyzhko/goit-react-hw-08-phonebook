import React from 'react'
import { List, Item, BtnDelete } from 'components/ContactsList.styled';
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getStatusFilter, getError, getIsLoading } from '../redux/selectors'
import { useEffect } from 'react';
import * as contactsOpetations from 'redux/contacts/contactsOperations'
import Loader from 'components/Loader/Loader'

export const ContactsList = () => {
    const dispatch = useDispatch();
    const filterName = useSelector(getStatusFilter);
    const contacts = useSelector(getContacts);
    const error = useSelector(getError);
    const loading = useSelector(getIsLoading);

    useEffect(() => { dispatch(contactsOpetations.fetchContacts()) }, [dispatch]);

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
        <>
        {error && <p>{error.massage}</p>}
        {loading && <Loader>Загружаем</Loader>}

            <List>
                { contactsAfterFilter.map(({ id, name, phone }) => (
                    <Item key={id}>{name}: {phone}
                        <BtnDelete type='button' onClick={() => dispatch(contactsOpetations.deleteContact(id))}>Delete</BtnDelete>
                    </Item>
                ))}
            </List>

        </>
    )
  }
