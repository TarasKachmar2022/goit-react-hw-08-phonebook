import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
// import { SharedLayout } from 'components/SharedLayout';
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
    if (!error) return;
    toast.error('Oops, something went wrong, please try again!');
  }, [error]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <MainBlock>
        <MainTitle>Phonebook</MainTitle>
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
