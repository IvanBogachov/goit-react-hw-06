// src/components/ContactList.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "/src/redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id} className="contact-item">
          {contact.name}: {contact.phone}
          <button
            onClick={() => dispatch(deleteContact(contact.id))}
            className="btn-delete-contact"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
