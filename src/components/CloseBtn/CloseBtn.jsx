import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Container, ModalCloseBtn } from './CloseBtn.styled';

const CloseBtn = ({ onClose }) => {
  return (
    <Container>
      <ModalCloseBtn onClick={onClose}>
        <AiOutlineCloseCircle />
      </ModalCloseBtn>
    </Container>
  );
};

CloseBtn.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CloseBtn;
