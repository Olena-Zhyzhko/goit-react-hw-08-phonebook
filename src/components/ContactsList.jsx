import React from 'react'
// import { nanoid } from 'nanoid'


export const ContactsList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>{name}: {number}</li>
            ))
            }
        </ul>
    )
  }
