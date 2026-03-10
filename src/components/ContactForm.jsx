import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../store/contactsSlice';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export default function ContactForm({ contactToEdit, clearEdit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setEmail(contactToEdit.email);
      setPhone(contactToEdit.phone);
    }
  }, [contactToEdit]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    const contactData = {
      id: contactToEdit ? contactToEdit.id : uuidv4(),
      name,
      email,
      phone
    };

    if (contactToEdit) {
      dispatch(updateContact(contactData));
      clearEdit();
    } else {
      dispatch(addContact(contactData));
    }

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Telefone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <Button type="submit">{contactToEdit ? 'Atualizar' : 'Adicionar'}</Button>
    </Form>
  );
}