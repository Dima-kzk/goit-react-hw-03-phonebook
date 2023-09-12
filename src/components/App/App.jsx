import { Component } from 'react';
import AddContactForm from '../AddContactForm/AddContactForm';
import { Сentralizer } from './App.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';

import Section from 'components/Section';
import { Filter } from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  AddContact = (name, number, id) => {
    this.setState(prevState => {
      if (
        prevState.contacts.some(e => {
          return e.name.toLowerCase() === name.toLowerCase();
        })
      ) {
        alert(`${name} is already in contacts`);
        return;
      }
      return {
        contacts: [...prevState.contacts, { name, id, number }],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  InputHandle = event => {
    if (event.currentTarget.name === 'filter') {
      this.setState({ filter: event.currentTarget.value });
    }
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    return filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    let cnt = JSON.parse(localStorage.getItem('contacts'));
    if (cnt === null) cnt = [];

    this.setState({ contacts: cnt });
  }

  render() {
    return (
      <Сentralizer>
        <Section title="Phonebook">
          <AddContactForm AddContact={this.AddContact} />
        </Section>
        <Section title="Contacts">
          {this.state.contacts.length > 0 ? (
            <>
              <Filter state={this.state} InputChange={this.InputHandle} />
              <ContactsList
                contacts={this.filterByName()}
                onClick={this.deleteContact}
              />
            </>
          ) : (
            <>
              <p>No contacts.</p>
              <p>You can add contacts.</p>
            </>
          )}
        </Section>
      </Сentralizer>
    );
  }
}

export default App;
