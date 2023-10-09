import { useState, useEffect } from "react";
import { ContactForm } from "./contactform/Contactform";
import { Filter } from "./filter/Filter";
import { ContactList } from "./contactlist/Contactlist";
import { nanoid } from "nanoid";
// import css from './Phonebook.module.css';

export interface Contacts {
  id: string;
  name: string;
  number: string;
}

export const App = () => {
  const [contacts, setContacts] = useState<Contacts[]>(() => {
    const storedData = localStorage.getItem("contacts");
    if (storedData) {
      // Якщо дані є в localStorage, розшифровуємо їх
      return JSON.parse(storedData);
    } else {
      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
    }
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name: string, number: string) => {
    const newContact = {
      id: `id-${nanoid()}`,
      name,
      number,
    };

    const isExist = contacts.some(
      (el) =>
        el.name.toLowerCase() === name.toLowerCase() || el.number === number
    );

    if (isExist) {
      alert("Contact already exists");
      return;
    }
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id: string) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleFilterChange = (event: string) => {
    setFilter(event);
  };

  const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ul>
        {contacts?.map((contact) => (
          <li key={contact.id}>
            <ContactList contact={contact} deleteContact={deleteContact} />
          </li>
        ))}
      </ul>
    </div>
  );
};
