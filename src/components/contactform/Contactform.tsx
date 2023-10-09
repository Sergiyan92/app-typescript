// import css from './Contactform.module.css';
import { FC, FormEvent, useState } from "react";
import { Contacts } from "../App";

interface ContactFormProps {
  contacts: Contacts[];
  addContact: (name: string, number: string) => void;
}
export const ContactForm: FC<ContactFormProps> = ({ addContact }) => {
  const [name, setNane] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addContact(name, number);
    setNane("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={(e) => setNane(e.target.value)}
      />
      <label>Phone</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
