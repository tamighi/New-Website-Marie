import React from "react";

import { Input, InputProps, Paper, useClickOutside } from "lib";

import styles from "./DatePicker.css";

type DatePickerProps = InputProps;

// TODO: Show as state instead of classList remove/add
// TODO: required not working => useForm required
// TODO: in fr
const DatePicker = (
  props: DatePickerProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());

  const datePickerRef = useClickOutside(() => {
    const datePicker = document.querySelector(`.${styles.datePicker}`);
    datePicker?.classList.remove(styles.show);
  });

  const handleChange = (day?: number) => {
    const value = day === undefined ? "" : `${month + 1}/${day}/${year}`;
    if (ref && "current" in ref && ref.current) {
      ref.current.value = value;
    }
    if (props.onChange) {
      const event = {
        target: {
          value: value,
          name: props.name,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      props.onChange(event);
    }
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
      <Input readOnly ref={ref} {...props} />
      <i
        className={styles.DateIcon}
        onClick={() => {
          const datePicker = document.querySelector(`.${styles.datePicker}`);
          datePicker?.classList.add(styles.show);
        }}
      >
        C
      </i>
      <i
        className={styles.ResetIcon}
        onClick={() => {
          handleChange(undefined);
        }}
      >
        X
      </i>
      <div className={styles.datePickerDropdown} ref={datePickerRef}>
        <Paper>
          <div className={styles.datePickerHeader}>
            <span className={styles.datePickerPrev} onClick={handlePrevMonth}>
              &#10094;
            </span>
            <span className={styles.datePickerHeaderTitle}>
              {new Date(year, month).toLocaleDateString("en-US", {
                month: "long",
              })}{" "}
              {year}
            </span>
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
              <Paper
                key={index}
                variant="primary"
                className={day ? styles.datePickerDay : styles.empty}
                onClick={day ? () => handleChange(day) : undefined}
              >
                {day}
              </Paper>
            ))}
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default React.forwardRef(DatePicker);
