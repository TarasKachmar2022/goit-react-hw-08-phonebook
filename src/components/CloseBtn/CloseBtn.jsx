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

export default CloseBtn;
