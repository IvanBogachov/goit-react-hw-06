import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "/src/redux/contactsSlice";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
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
