import React from 'react'
// import { nanoid } from 'nanoid'


export const ContactsList = ({ contacts, removeContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>{name}: {number} <button type='button' onClick={() => removeContact(id)}>Delete</button></li>
            ))
            }
        </ul>
    )
  }

