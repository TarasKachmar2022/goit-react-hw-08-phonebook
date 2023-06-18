import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer = styled.div`
  background-image: url('https://pixabay.com/get/geca127ad69e282e4df5e9af2d6a8084ea692607f98d1a18436769b4e69c4db3f6f47a64da9aa0b03a84f1567c35952dd33a1b73cd7a5eaa533a73b78d4006205_1280.jpg');
  border: 5px solid darkgrey;
  border-radius: 7px;

  @media screen and (min-width: 320px) {
    text-align: center;
    width: 290px;
  }
  @media screen and (min-width: 768px) {
    width: 330px;
  }
  @media screen and (min-width: 1280px) {
    padding: 24px 48px;
    width: 550px;
    height: 450px;
  }
`;
