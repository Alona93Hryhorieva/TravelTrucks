import css from "./BookCamperForm.module.css";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .trim(),
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[\d-]+$/, "Email must contain only digits or hyphens")
    .min(3, "Email must be at least 3 characters")
    .max(25, "Email cannot exceed 25 characters"),
  comment: yup
    .string()
    .min(5, "Comment must be at least 5 characters")
    .max(50, "Comment cannot exceed 50 characters")
    .trim(),
  date: yup.date().required("Date is required"),
});

const handleSubmit = (values, { resetForm }) => {
  e.preventDefault();
  toast.success("You successfully sent the form!");
  resetForm();
};

export default function BookCamperForm() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, errors }) => (
          <Form>
            <div className={css.form}>
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                className={css.input}
                name="name"
                type="text"
                placeholder="Name*"
              />
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                className={css.input}
                name="email"
                type="email"
                placeholder="Email*"
              />
              <label htmlFor="date">Booking date</label>
              <input
                type="date"
                name="date"
                value={values.date}
                onChange={(e) => setFieldValue("date", e.target.value)}
                placeholder="Booking date*"
              />
              <label htmlFor="comment">Comment</label>
              <Field
                id="comment"
                className={css.input}
                name="comment"
                as="textarea"
                placeholder="Comment"
              />
            </div>
            <button className={css.sendButton} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
