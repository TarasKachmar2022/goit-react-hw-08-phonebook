import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import ContactForm from 'components/ContactForm';
import ContactsFilter from 'components/ContactsFilter';
import ContactList from 'components/ContactList';
import { MainBlock, MainTitle, Title } from './ContactsPage.styled';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError } from 'redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts({ signal: controller.signal }));
    return () => controller.abort();
  }, [dispatch]);

  useEffect(() => {
    if (!error) return;
    toast.error('Oops, something went wrong, please try again!');
  }, [error]);

  return (
    <>
      <MainBlock>
        <MainTitle>Add contact</MainTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <ContactsFilter />
        <ContactList />
      </MainBlock>
      <Toaster position="top-right" />
    </>
  );
};

export default ContactsPage;
