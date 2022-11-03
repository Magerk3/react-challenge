import React from "react";

export const ContactPicker = ({contacts, handleChange}) => {
  return (
    <select onChange={handleChange} name='contact'>
      <option value={''}> - </option>
      {contacts.map((contact) => (
        <option value={contact.name}>{contact.name}</option>
      ))}
    </select>
  );
};
