import { FC } from "react";
import { Contacts } from "../contactsSlice";
interface ContactListProps {
  contacts: Contacts[];
  deleteContact: (id: string) => void;
}

export const ContactList: FC<ContactListProps> = ({
  contacts,
  deleteContact,
}) => {
  return (
    <ul>
      {contacts?.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
