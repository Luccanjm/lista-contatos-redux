import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';

export default function ContactList({ onEdit }) {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <div>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onEdit={onEdit} />
      ))}
    </div>
  );
}