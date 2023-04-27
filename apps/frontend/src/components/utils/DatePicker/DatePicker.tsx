import { Input, useClickOutside } from 'lib';
import React from 'react';
import styles from './DatePicker.css';

const DatePicker = () => {
  const [date, setDate] = React.useState('');
  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());

  const datePickerRef = useClickOutside(() => {
    const datePicker = document.querySelector(`.${styles.datePicker}`);
    datePicker?.classList.remove(styles.show);
  })

  const handleChange = (day: number) => {
    setDate(`${month + 1}/${day}/${year}`);
    const datePicker = document.querySelector(`.${styles.datePicker}`);
    datePicker?.classList.remove(styles.show);
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className={styles.datePicker}>
      <Input
        type="text"
        placeholder="Select a date"
        value={date}
        onClick={() => {
          const datePicker = document.querySelector(`.${styles.datePicker}`);
          datePicker?.classList.add(styles.show);
        }}
        readOnly
      />
      <div
        className={styles.datePickerOverlay}
        onClick={() => {
          const datePicker = document.querySelector(`.${styles.datePicker}`);
          datePicker?.classList.remove(styles.show);
        }}
      ></div>
      <div className={styles.datePickerDropdown} ref={datePickerRef}>
        <div className={styles.datePickerHeader}>
          <span className={styles.datePickerPrev} onClick={handlePrevMonth}>
            &#10094;
          </span>
          <span className={styles.datePickerMonth}>
            {new Date(year, month).toLocaleDateString('en-US', { month: 'long' })}
          </span>
          <span className={styles.datePickerYear}>{year}</span>
          <span className={styles.datePickerNext} onClick={handleNextMonth}>
            &#10095;
          </span>
        </div>
        <div className={styles.datePickerDays}>
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          {days.map((day, index) => (
            <span
              key={index}
              className={day ? styles.datePickerDay : styles.empty}
              onClick={day ? () => handleChange(day) : undefined}
            >
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
