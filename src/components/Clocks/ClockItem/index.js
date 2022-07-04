import React from 'react';
import PropTypes from 'prop-types';

import renderDate from '../../../utils/renderDate';

import styles from './index.module.css';

function ClockItem({ item, date, onRemove: handleRemove }) {
  const time = renderDate(date, item.timeZone);
  return (
    <li className={styles.clock}>
      <div className={styles.city}>{item.title}</div>
      <button className={styles.delete} onClick={() => handleRemove(item.id)}>
        x
      </button>
      <div
        className={styles.time}
      >{`${time.hours}:${time.mins}:${time.secs}`}</div>
      <div className={styles.clockFace}>
        <div
          className={styles.hoursHand}
          style={{ transform: `rotateZ(${(time.hours * 360) / 12}deg)` }}
        ></div>
        <div
          className={styles.minsHand}
          style={{ transform: `rotateZ(${(time.mins * 360) / 60}deg)` }}
        ></div>
      </div>
    </li>
  );
}

ClockItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  date: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ClockItem;
