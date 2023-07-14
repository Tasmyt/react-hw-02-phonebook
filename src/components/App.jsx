import { Component } from 'react';
import { FormContact } from './FormContact/FormContact';
import { ListContact } from './ListContact/ListContact';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Conteiner, Box } from './App.styled';
export class App extends Component {
  state = {
    contacts: [{ id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' }],
    name: '',
    filter: '',
  };

  addContact = ({ name, number }) => {
    const findContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findContact) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(prevState => {
      const list = [...prevState.contacts];
      list.push({ id: nanoid(), name: name, number: number });
      return { contacts: list };
    });
  };
  InputChangeFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filter = () => {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  };

  onDeletContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    return (
      <Conteiner>
        <h1>Phonebook</h1>
        <FormContact onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Box>
        <p>Find contacts by name</p>
        <Filter
          changeFilter={this.InputChangeFilter}
          filter={this.state.filter}
        />        
        <ListContact
          contacts={this.filter()}
          onDeletContact={this.onDeletContact}
          />
          </Box>
      </Conteiner>
    );
  }
}
