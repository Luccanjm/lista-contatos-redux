import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
`;

function AppContent() {
  const [contactToEdit, setContactToEdit] = useState(null);

  const handleEdit = contact => {
    setContactToEdit(contact);
  };

  const clearEdit = () => {
    setContactToEdit(null);
  };

  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <ContactForm contactToEdit={contactToEdit} clearEdit={clearEdit} />
      <ContactList onEdit={handleEdit} />
    </Container>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}