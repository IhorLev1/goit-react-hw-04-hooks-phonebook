import { useState } from 'react';
import shortid from 'shortid';

import s from './Form.module.css';
import st from '../box.module.css';


function Form({ checkingForExistenceOfSuchName, onAdd }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const repeatName = checkingForExistenceOfSuchName(name);

    if (repeatName) {
      alert(`${name} is alredy in contact`);
    } else {
      const newContact = { id: shortid.generate(), name, number };
      onAdd(newContact);
    }

    resetForm();

  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <label className={s.input}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeForm}
        />
      </label>
      <label className={s.input}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeForm}
        />
      </label>
      <button className={st.myButton} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
