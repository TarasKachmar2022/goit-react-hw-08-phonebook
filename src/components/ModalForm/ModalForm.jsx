import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
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
import { FaEdit } from 'react-icons/fa';
import { updateContact } from '../../redux/contacts/operations';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const ModalForm = ({ id, name, number, onClose }) => {
  const initialValues = { name: name, number: number };
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const newContact = {
      id: id,
      ...values,
    };
    dispatch(updateContact(newContact));
    onClose();
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
          <FormBtn type="submit">
            <span>
              <FaEdit />{' '}
            </span>
            Edit
          </FormBtn>
        </Form>
      </Formik>
    </>
  );
};

export default ModalForm;
