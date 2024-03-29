import styled from 'styled-components';

export const RegisterMainBlock = styled.div`
  backdrop-filter: blur(7.5px);
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    min-height: 86vh;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 440px;
    min-height: 85vh;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    padding: 20px;
    width: 650px;
    min-height: 80vh;
  }
`;

export const Title = styled.h2`
  text-shadow: ${p => p.theme.shadows.textShadow};

  @media screen and (min-width: 320px) {
    font-size: 32px;
  }
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 38px;
  }
`;
