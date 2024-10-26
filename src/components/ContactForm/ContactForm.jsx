import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '/src/redux/contactsSlice.js';

import styles from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, `The "Name" is too Short!`)
    .max(50, `The "Name" is too Long!`)
    .required('Required!'),
  number: Yup.string()
    .min(3, `The "Number" is too Short!`)
    .max(50, `The "Number" is too Long!`)
    .required('Required!'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const newContact = {
      id: Date.now().toString(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}>
      {({ isSubmitting }) => (
        <Form className={styles.formContact}>
          <label className={styles.formLabel} htmlFor='name'>
            Name
          </label>
          <div className={styles.formInputWrapper}>
            <Field
              className={styles.formInput}
              type='text'
              name='name'
              id='name'
            />
            <ErrorMessage
              className={styles.formErrorMessage}
              name='name'
              component='div'
            />
          </div>

          <label className={styles.formLabel} htmlFor='number'>
            Number
          </label>
          <div className={styles.formInputWrapper}>
            <Field
              className={styles.formInput}
              type='tel'
              inputMode='tel'
              name='number'
              id='number'
            />
            <ErrorMessage
              className={styles.formErrorMessage}
              name='number'
              component='div'
            />
          </div>

          <button
            className={styles.formButton}
            type='submit'
            disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
