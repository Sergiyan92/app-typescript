import React, { useState, useEffect, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContactForm } from "./contactform/Contactform";
import { Filter } from "./filter/Filter";
import { ContactList } from "./contactlist/Contactlist";
import { addContact, deleteContact } from "./contactsSlice";
import { RootState } from "./store";
// import css from './Phonebook.module.css';

export interface Contacts {
  id: string;
  name: string;
  number: string;
}

export const App = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        contacts={contacts}
        addContact={(name: string, number: string) =>
          dispatch(addContact({ name, number }))
        }
      />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        deleteContact={(id) => dispatch(deleteContact(id))}
      />
    </div>
  );
};
