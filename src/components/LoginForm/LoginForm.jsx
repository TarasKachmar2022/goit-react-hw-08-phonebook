import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';

const initialValues = { email: '', password: '' };

const schema = yup.object().shape({
  email: yup.string().email().required('This field is required!'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('This field is required!'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <>
      <h1>Log In</h1>
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
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
