import { useState } from 'react';

import Form from './Form/Form';
import PhoneBook from './PhoneBook/PhoneBook';
import Filter from './Filter/Filter';
import useLocalStorage from '../hooks/useLocalStorage';

import s from './box.module.css';

function App() {
  const [contacts, setContacts] = useLocalStorage('userContacts', []);
  const [filter, setFilter] = useState('');

  const checkingForExistenceOfSuchName = variableName => {
    const handleName = variableName.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === handleName);
  };

  const handleAddContact = data => {
    setContacts(prevContacts => [...prevContacts, data]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => [
      ...prevContacts.filter(({ id }) => id !== contactId),
    ]);
  };

  const handleFilterChange = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    const searchName = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchName),
    );
  };

  console.log(getVisibleContacts());

  const filterContacts = getVisibleContacts();

  return (
    <div className={s.box}>
      <h2>Form</h2>
      <Form
        onAdd={handleAddContact}
        checkingForExistenceOfSuchName={checkingForExistenceOfSuchName}
      />
      <h2>Book</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <PhoneBook contacts={filterContacts} onRemove={deleteContact} />
    </div>
  );
}
export default App;
