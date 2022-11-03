import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const [title, setTitle] = useState('');
 const [contact, setContact] = useState('');
 const [date, setDate] = useState('');
 const [time, setTime] = useState('');


  const handleChange = (e) => {
    const tName = e.target.name;
    const tValue = e.target.value;
    if(tName === 'title') {
    setTitle(tValue);
     } else if (tName === 'date') {
    setDate(tValue);
    } else if (tName === 'time') {
    setTime(tValue);
    } else if (tName === 'contact') {
      setContact(tValue);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    const newAppointment = 
    {
      title: title,
      contact: contact,
      date: date,
      time: time
    }
    props.addAppointment(newAppointment);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
    
}
   
  

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm handleSubmit={handleSubmit} handleChange={handleChange} date={date} title={title} time={time} contact={contact} contacts={props.contacts} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={props.appointments} />
      </section>
    </div>
  );
};
