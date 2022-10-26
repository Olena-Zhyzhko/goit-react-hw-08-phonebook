import { createAction } from '@reduxjs/toolkit'

const addContact = createAction('contacts/addContact');

const removeContact = createAction('contacts/removeContact')

export { addContact, removeContact }