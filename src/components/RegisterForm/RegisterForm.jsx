import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/auth-operations';
import routes from 'routes';
import {
  Form,
  MainTitle,
  RegisterFormLabel,
  RegisterFormLabelSpan,
  RegisterInputField,
  ErrorMessage,
  RegisterFormBtnWrap,
  RegisterLoginLink,
  RegisterFormLoginLink,
  RegisterFormBtn,
} from './RegisterForm.styled';

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
      <MainTitle>Register</MainTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <RegisterFormLabel htmlFor="name">
            <RegisterFormLabelSpan>Name</RegisterFormLabelSpan>
            <RegisterInputField
              id="name"
              name="name"
              autoFocus
              placeholder="Enter name"
            />
            <ErrorMessage name="name" component="div" />
          </RegisterFormLabel>

          <RegisterFormLabel htmlFor="email">
            <RegisterFormLabelSpan>Email</RegisterFormLabelSpan>
            <RegisterInputField
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <ErrorMessage name="email" component="div" />
          </RegisterFormLabel>

          <RegisterFormLabel htmlFor="password">
            <RegisterFormLabelSpan>Password</RegisterFormLabelSpan>
            <RegisterInputField
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" component="div" />
          </RegisterFormLabel>
          <RegisterFormBtnWrap>
            <RegisterFormLoginLink>
              <p> Already registered?</p>
              <RegisterLoginLink>
                <Link to={`${routes.LOGIN}`}>Log In.</Link>
              </RegisterLoginLink>
            </RegisterFormLoginLink>
            <RegisterFormBtn type="submit">Register</RegisterFormBtn>
          </RegisterFormBtnWrap>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
