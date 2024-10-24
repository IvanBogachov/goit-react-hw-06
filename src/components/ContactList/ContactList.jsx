import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "/src/redux/contactsSlice";
import { selectNameFilter } from "/src/redux/filtersSlice.js";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <li className={styles.contactItem} key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            onClick={() => dispatch(deleteContact(contact.id))}
            className={styles.modalBtn}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
