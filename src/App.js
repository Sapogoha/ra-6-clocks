import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import Clocks from './components/Clocks';

function App() {
  const [data, addData] = useState([]);

  const handleAdd = (item) => {
    const notUniqueItem = data.find(
      (el) => el.title.toLowerCase() === item.title.toLowerCase()
    );

    if (notUniqueItem) {
      addData([...data.filter((itm) => itm.id !== notUniqueItem.id), item]);
    } else {
      addData((prevItems) => [...prevItems, item]);
    }
  };

  const handleRemove = (id) => {
    addData([...data.filter((itm) => itm.id !== id)]);
  };

  return (
    <>
      <Form onAdd={handleAdd} />
      <Clocks data={data} onRemove={handleRemove} />
    </>
  );
}

export default App;
