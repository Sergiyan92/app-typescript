import { FC } from 'react';
import { Contacts } from '../App';
interface ContactListProps {
  contact: Contacts;
  deleteContact: (id: string) => void;
}

export const ContactList: FC<ContactListProps> = ({
  contact,
  deleteContact,
}) => {
  return (
    <li>
      <p>{contact.name}</p> - <p>{contact.number}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  );
};
