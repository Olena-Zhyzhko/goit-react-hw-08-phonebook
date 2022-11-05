import React from 'react'
import { ContactsList } from 'components/ContactsList'
import { ContactForm } from 'components/Form'
import { Filter } from 'components/Filter'
import { Container } from 'components/App.styled'


export default function Contacts() {
  return (
      <div>
        <Container>
             <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter  />
            <ContactsList />
        </Container>
      </div>
  )
}
