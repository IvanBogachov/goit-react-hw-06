import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

import styles from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, `The "Name" is too Short!`)
    .max(50, `The "Name" is too Long!`)
    .required("Required!"),
  number: Yup.string()
    .min(3, `The "Number" is too Short!`)
    .max(50, `The "Number" is too Long!`)
    .required("Required!"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const contactId = nanoid();

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: contactId };
    onAdd(newContact);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ isSubmitting }) => (
        <Form className={styles.formContact}>
          <label className={styles.formLabel} htmlFor={nameFieldId}>
            Name
          </label>
          <div className={styles.formInputWrapper}>
            <Field
              className={styles.formInput}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              className={styles.formErrorMessage}
              name="name"
              component="div"
            />
          </div>

          <label className={styles.formLabel} htmlFor={numberFieldId}>
            Number
          </label>
          <div className={styles.formInputWrapper}>
            <Field
              className={styles.formInput}
              type="tel"
              inputMode="tel"
              name="number"
              id={numberFieldId}
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