import styled from '@emotion/styled';
import modalBgImage from '../../../src/images/coffee-g318e4cf20_1280.jpg';

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
  background: url(${modalBgImage});
  /* background-image: url('https://pixabay.com/get/g3f529f6d1373745a3b160ff3ad97d8a6a167b3bd43ae347e8c013a244ea2858f7a27476914ed1fe6818ce581dd1d71d1b5579539e8c15aa3be9b684030a0ec16_1280.jpg'); */
  border: 5px solid darkgrey;
  border-radius: 7px;

  @media screen and (min-width: 320px) {
    text-align: center;
    padding: 10px 0px;
    width: 290px;
  }
  @media screen and (min-width: 768px) {
    padding: 24px 48px;
    width: 450px;
  }
  @media screen and (min-width: 1280px) {
    padding: 24px 48px;
    width: 550px;
    height: 450px;
  }
`;
