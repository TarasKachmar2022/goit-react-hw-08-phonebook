import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from 'routes';
import { login } from '../../redux/auth/auth-operations';
import {
  Form,
  MainTitle,
  LoginFormLabel,
  LoginFormLabelSpan,
  LoginInputField,
  ErrorMessage,
  LoginFormLoginLink,
  LoginRegisterLink,
  LoginFormBtnWrap,
  LoginFormBtn,
} from './LoginForm.styled';

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
      <MainTitle>Log In</MainTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <LoginFormLabel htmlFor="email">
            <LoginFormLabelSpan>Email</LoginFormLabelSpan>
            <LoginInputField
              id="email"
              type="email"
              name="email"
              autoFocus
              placeholder="Enter email"
            />
            <ErrorMessage name="email" component="div" />
          </LoginFormLabel>
          <LoginFormLabel htmlFor="password">
            <LoginFormLabelSpan>Password</LoginFormLabelSpan>
            <LoginInputField
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" component="div" />
          </LoginFormLabel>
          <LoginFormBtnWrap>
            <LoginFormLoginLink>
              <p> First time on Netflix?</p>
              <LoginRegisterLink>
                <Link to={`${routes.REGISTER}`}>Sign up.</Link>
              </LoginRegisterLink>
            </LoginFormLoginLink>
            <LoginFormBtn type="submit">Log in</LoginFormBtn>
          </LoginFormBtnWrap>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
