import styled from 'styled-components';

export const MainBlock = styled.div`
  backdrop-filter: blur(7.5px);
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0 auto;
    padding: 50px 10px;
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
    min-height: 83vh;
  }
`;

export const MainTitle = styled.h1`
  text-shadow: ${p => p.theme.shadows.textShadow};

  @media screen and (min-width: 320px) {
    font-size: 42px;
    margin-top: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-top: 28px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 72px;
  }
`;

export const Title = styled.h2`
  text-shadow: ${p => p.theme.shadows.textShadow};
  margin-bottom: 60px;

  @media screen and (min-width: 320px) {
    font-size: 32px;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 700;

  @media screen and (min-width: 320px) {
    font-size: 18px;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    width: 450px;
  }
`;
