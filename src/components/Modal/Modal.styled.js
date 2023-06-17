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
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  /* background-color: lightgray; */
  background-image: url('https://pixabay.com/get/gd62ab896dd8040756dac5a300c9bfa676925a5397717d885078a36b761a00bc4b8460025aa775e3da42233284082b746b2543cef0751e7d8590e1e96123a29da_1280.jpg');
  border: 5px solid darkgrey;
  border-radius: 7px;
  /* box-shadow: rgb(0, 0, 0) 0px 0px 80px;
  width: 300px;
  height: 300px; */

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

export const ModalForm = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
