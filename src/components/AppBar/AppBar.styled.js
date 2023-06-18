import styled from 'styled-components';

export const AppBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  z-index: 100;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(7.5px);
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (min-width: 320px) {
    padding: 0 10px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 30px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 40px;
  }
`;
