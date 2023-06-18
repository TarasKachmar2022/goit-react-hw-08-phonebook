import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import ModalForm from 'components/ModalForm';
import CloseBtn from '../CloseBtn/CloseBtn';
import { Overlay, ModalContainer } from 'components/Modal/Modal.styled';

const rootModal = document.querySelector('#rootModal');

const Modal = ({ id, name, number, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClose = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClose}>
      <ModalContainer>
        <CloseBtn onClose={onClose} />
        <ModalForm id={id} name={name} number={number} onClose={onClose} />
      </ModalContainer>
    </Overlay>,
    rootModal
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
