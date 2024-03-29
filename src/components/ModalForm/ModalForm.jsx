import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
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
import { useContacts } from '../../hooks';
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
  const contacts = useContacts();

  const handleSubmit = values => {
    const findContacts = contacts.find(
      contact =>
        contact.name.toLowerCase().trim() === values.name.toLowerCase().trim()
    );

    if (findContacts) {
      toast.error(`${findContacts.name} is already in contacts.`);
      return;
    }

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

ModalForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalForm;
