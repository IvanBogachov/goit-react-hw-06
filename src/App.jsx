import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { setContacts, selectContacts } from './redux/contactsSlice';
import contactsData from './components/Data/contacts.json';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (contacts.length === 0 && !isLoaded) {
      dispatch(setContacts(contactsData));
      setIsLoaded(true);
    }
  }, [contacts, isLoaded, dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
