import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  handleChange
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit} >
      <label>
        Title:
        <input type='text' name='title'  onChange={handleChange} value={title} />
        Date: 
        <input type='date' name='date' onChange={handleChange} value={date} min={getTodayString()} /> 
        Time: 
        <input type='time' name='time' onChange={handleChange} value={time} />
        Contact:
        <ContactPicker contacts={contacts} handleChange={handleChange} />
      </label>
      
      <input type='submit' value='submit' />
      
    </form>
  );
};
