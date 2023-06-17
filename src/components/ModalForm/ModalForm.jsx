import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import {
  MainTitle,
  FormLabel,
  FormLabelIcon,
  FormLabelSpan,
  InputField,
  ErrorMessage,
  FormBtn,
} from '../../components/ModalForm/ModalForm.styled';
import { FaUser } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';

const initialValues = { name: '', number: '' };

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const ModalForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(login(values));
  };

  return (
    <>
      <MainTitle>Edit contact</MainTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormLabel htmlFor="name">
            <FormLabelSpan>
              <FormLabelIcon>
                <FaUser />
              </FormLabelIcon>
              Name
            </FormLabelSpan>
            <InputField
              id="name"
              type="text"
              name="name"
              autoFocus
              placeholder="Enter name"
            />
            <ErrorMessage name="name" component="div" />
          </FormLabel>

          <FormLabel htmlFor="number">
            <FormLabelSpan>
              <FormLabelIcon>
                <BsTelephoneFill />
              </FormLabelIcon>
              Number
            </FormLabelSpan>
            <InputField
              id="number"
              type="tel"
              name="number"
              placeholder="Enter number"
            />
            <ErrorMessage name="number" component="div" />
          </FormLabel>
          <FormBtn type="submit">Edit</FormBtn>
        </Form>
      </Formik>
    </>
  );
};

export default ModalForm;
