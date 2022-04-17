import { Component } from 'react';
import { Form } from '../Form/Form';
import { Section } from '../Section/Section';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // Получение данных формы  и добавление контакта
  addContact = data => {
    if (this.checkExistingContact(data.name)) {
      return;
    }

    const contact = {
      id: nanoid(),
      ...data,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  // Запись значения фильтра в свойство состояния
  setFilter = name => {
    this.setState({ filter: name });
  };

  //Фильтрация контактов по имени
  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Проверка на существующий контакт
  checkExistingContact = newName => {
    const existingСontact = this.state.contacts.find(
      ({ name }) => name === newName
    );

    if (existingСontact) {
      alert(`${existingСontact.name} is already in contacts`);
      return true;
    }
  };

  // Удаление контакта
  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  // Жизненный цикл монтирования(получение данных из хранилища)
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  // Жизненный цикл обновления(запись данных в хранилище)
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const { filter } = this.state;

    return (
      <Section title="Phonebook">
        <Form onSubmit={this.addContact}></Form>
        <Section title="Contacts">
          <Filter filter={filter} setFilter={this.setFilter}></Filter>
          <ContactsList
            contacts={this.filterContacts()}
            deleteContact={this.deleteContact}
          ></ContactsList>
        </Section>
      </Section>
    );
  }
}
