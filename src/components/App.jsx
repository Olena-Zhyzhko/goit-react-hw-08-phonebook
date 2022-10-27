import { ContactsList } from 'components/ContactsList'
import { ContactForm } from 'components/Form'
import { Filter } from 'components/Filter'
import { Container } from 'components/App.styled'

export function App() {
  return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter  />
      <ContactsList />
      </Container>
    );  
}