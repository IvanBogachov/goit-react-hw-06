import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "/src/redux/contactsSlice.js";

import styles from "./ContactForm.module.css";

// Валідаційна схема за допомогою Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  number: Yup.string().required("Number is required"),
});

// Початкові значення для форми
const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const newContact = {
      id: Date.now().toString(),
      name: values.name,
      phone: values.number,
    };
    dispatch(addContact(newContact));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ isSubmitting }) => (
        <Form className={styles.formContact}>
          <label className={styles.formLabel} htmlFor="name">
            Name
          </label>
          <div className={styles.formInputWrapper}>
            <Field
              className={styles.formInput}
              type="text"
              name="name"
              id="name"
            />
            <ErrorMessage
              className={styles.formErrorMessage}
              name="name"
              component="div"
            />
          </div>

          <label className={styles.formLabel} htmlFor="number">
            Number
          </label>
          <div className={styles.formInputWrapper}>
            <Field
              className={styles.formInput}
              type="tel"
              name="number"
              id="number"
            />
            <ErrorMessage
              className={styles.formErrorMessage}
              name="number"
              component="div"
            />
          </div>

          <button
            className={styles.formButton}
            type="submit"
            disabled={isSubmitting}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
