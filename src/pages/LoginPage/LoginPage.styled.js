import styled from 'styled-components';

export const LoginMainBlock = styled.div`
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
    min-height: 83vh;
  }
`;
