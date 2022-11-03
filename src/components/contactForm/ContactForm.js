import React from "react";

export const ContactForm = ({
  
  handleSubmit,
  handleChange,
  name,
  email,
  phone
  
}) => {
  return (
    <form onSubmit={handleSubmit} >
      <label>
        Name:
        <input type='text' name='name'  onChange={handleChange} value={name} />
        Phone: 
        <input type='text' name='phone' onChange={handleChange} value={phone} /> 
        Email: 
        <input type='text' name='email' onChange={handleChange} value={email} />
      </label>
      <input type='submit' value='submit' />
    </form>
  );
};
