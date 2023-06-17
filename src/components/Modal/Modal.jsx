import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import ModalForm from 'components/ModalForm';
import { Overlay, ModalContainer } from 'components/Modal/Modal.styled';

const rootModal = document.querySelector('#rootModal');

const Modal = ({ id, name, number, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <ModalForm>{{ id, name, number, onClose }}</ModalForm>
      </ModalContainer>
    </Overlay>,
    rootModal
  );
};

// ModalImg.propTypes = {
//   largeImageURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

export default Modal;
