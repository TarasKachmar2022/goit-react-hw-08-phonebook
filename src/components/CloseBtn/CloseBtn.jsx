import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Container, ModalCloseBtn } from './CloseBtn.styled';

const CloseBtn = ({ onClose }) => {
  const Close = () => {
    console.log(onClose);
    onClose();
  };
  return (
    <Container onClick={Close}>
      <ModalCloseBtn>
        <AiOutlineCloseCircle />
      </ModalCloseBtn>
    </Container>
  );
};

CloseBtn.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CloseBtn;
