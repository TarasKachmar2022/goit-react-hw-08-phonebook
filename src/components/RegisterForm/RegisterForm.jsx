import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

const initialValues = { name: '', email: '', password: '' };

const schema = yup.object().shape({
  name: yup.string().required('This field is required!'),
  email: yup.string().email().required('This field is required!'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('This field is required!'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="name">
            <span>Name</span>
            <Field id="name" name="name" autoFocus placeholder="Enter name" />
            <ErrorMessage name="name" component="div" />
          </label>

          <label htmlFor="email">
            <span>Email</span>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <ErrorMessage name="email" component="div" />
          </label>

          <label htmlFor="password">
            <span>Password</span>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
