import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = { email: '', password: '' };

const schema = yup.object().shape({
  email: yup.string().email().required('This field is required!'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('This field is required!'),
});

const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    // dispatch(authOperations.logIn(values));
    resetForm();
  };

  return (
    <>
      <h1>LogIn</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">
            <span>Email</span>
            <Field
              id="email"
              type="email"
              name="email"
              autoFocus
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

export default LoginForm;
