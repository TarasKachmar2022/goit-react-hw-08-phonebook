import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import { IoPersonRemove } from 'react-icons/io5';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectCurrentContacts,
  selectContacts,
} from '../../redux/contacts/selectors';
import { useAuth } from 'hooks';
import Modal from '../Modal';
import {
  ContactItem,
  ContactContainer,
  ContactTitle,
  ContactNumber,
  ContactsBtnWrap,
  DeleteBtn,
  EditBtn,
} from './ContactCard.styled';
import { useState } from 'react';

const ContactCard = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const currentContacts = useSelector(selectCurrentContacts);

  const showModal = () => {
    setOpenModal(true);
  };
  console.log(number);
  // const handleEdit = async id => {
  //   try {
  //     setIsEditing(true);
  //     setOpen(true);
  //     // await dispatch(updateContact(id));
  //     // setImgForModal(img);
  //   } catch (error) {
  //     toast.error(error.message);
  //     setOpen(false);
  //     setIsEditing(false);
  //   }
  // };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleDelete = async id => {
    try {
      setIsDeleting(true);
      await dispatch(deleteContact(id));
      setIsDeleting(false);
    } catch (error) {
      toast.error(error.message);
      setIsDeleting(false);
    }
  };

  return (
    <ContactItem>
      <ContactContainer>
        <ContactTitle>{name}:</ContactTitle>
        <ContactNumber>{number}</ContactNumber>
      </ContactContainer>
      <ContactsBtnWrap>
        <EditBtn type="button" onClick={() => showModal(id)}>
          {(openModal && (
            <ThreeDots height="20" width="16" color="white" />
          )) || <></>}
          {openModal && (
            <Modal data={(id, name, number)} onClose={closeModal} />
          )}
        </EditBtn>
        <DeleteBtn type="button" onClick={() => handleDelete(id)}>
          {(isDeleting && (
            <ThreeDots height="20" width="16" color="white" />
          )) || <IoPersonRemove />}
        </DeleteBtn>
      </ContactsBtnWrap>
    </ContactItem>
  );
};

ContactCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactCard;
