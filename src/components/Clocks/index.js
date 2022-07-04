import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ClockItem from './ClockItem';

import styles from './index.module.css';

function Clocks({ data, onRemove: handleRemove }) {
  const timestamp = Date.now();
  const [date, setTimestamp] = useState(timestamp);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimestamp(timestamp);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <ul className={styles.clocks}>
      {data.length > 0
        ? data.map((item) => (
            <ClockItem
              key={item.id}
              item={item}
              date={date}
              onRemove={handleRemove}
            />
          ))
        : 'Add your first Clock'}
    </ul>
  );
}

Clocks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Clocks;
