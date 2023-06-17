import styled from 'styled-components';

export const RegisterMainBlock = styled.div`
  backdrop-filter: blur(7.5px);
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 440px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    padding: 20px;
    width: 650px;
  }
`;
