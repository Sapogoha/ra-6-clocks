import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';
import { nanoid } from 'nanoid';

function Form({ onAdd }) {
  const emptyFormState = { title: '', timeZone: '' };
  const [form, setForm] = useState(emptyFormState);

  const handleAdd = (evt) => {
    evt.preventDefault();
    if (form.title === '' || form.timeZone === '') {
      return;
    }
    const clock = {
      id: nanoid(),
      title: form.title,
      timeZone: Number(form.timeZone),
    };
    onAdd(clock);
    setForm(emptyFormState);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <form className={styles.field} onSubmit={handleAdd}>
      <div className={styles.input}>
        <label htmlFor="title" className={styles.label}>
          Title:
        </label>
        <input
          className={styles.input}
          type="text"
          id="title"
          name="title"
          minLength="3"
          maxLength="20"
          placeholder="Berlin"
          onChange={handleChange}
          value={form.title}
          required
        />
      </div>
      <div>
        <label htmlFor="timeZone" className={styles.label}>
          Time Zone (UTC):
        </label>
        <input
          className={styles.input}
          type="number"
          id="timeZone"
          name="timeZone"
          min="-11"
          max="13"
          step=".25"
          placeholder="2"
          onChange={handleChange}
          value={form.timeZone}
          required
        />
      </div>
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
}

Form.propTypes = { onAdd: PropTypes.func.isRequired };

export default Form;
