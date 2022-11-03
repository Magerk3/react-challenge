import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {

 const [name, setName] = useState('');
 const [phone,setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(true);

 
 const handleChange = (e) => {
  const tName = e.target.name;
  const tValue = e.target.value;
  if(tName === 'name') {
    setName(tValue);
  } else if (tName === 'email') {
    setEmail(tValue);
  } else if (tName === 'phone') {
    setPhone(tValue);
  }
 }

 const handleSubmit = (e) => {
    e.preventDefault();
    if(duplicate) {
      alert('name is duplicate!')
    } else {
      const newContact = 
      {
        name: name,
        phone: phone,
        email: email
      }
      props.addContact(newContact);
      setName('');
      setPhone('');
      setEmail('');
      
    }
    
  };

  useEffect(() => {
    if(props.contacts.find(contact => contact.name === name)) {
      setDuplicate(true)
    }else { setDuplicate(false) } 
    
  })

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleChange={handleChange} handleSubmit={handleSubmit}  name={name} phone={phone} email={email}  />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={props.contacts} />
      </section>
    </div>
  );
};
