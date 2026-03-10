import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../store/contactsSlice';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid #ccc;
  margin-bottom: 8px;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 4px 8px;
  cursor: pointer;
`;

export default function ContactItem({ contact, onEdit }) {
  const dispatch = useDispatch();

  return (
    <Item>
      <div>
        <strong>{contact.name}</strong> <br />
        {contact.email} <br />
        {contact.phone}
      </div>
      <Actions>
        <Button onClick={() => onEdit(contact)}>Editar</Button>
        <Button onClick={() => dispatch(removeContact(contact.id))}>Remover</Button>
      </Actions>
    </Item>
  );
}