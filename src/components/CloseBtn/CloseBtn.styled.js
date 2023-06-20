import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ModalCloseBtn = styled.div`
  position: absolute;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: color linear 400ms;
  z-index: 1300;

  &:hover {
    color: orange;
  }

  &:focus {
    color: orange;
  }

  @media screen and (min-width: 320px) {
    top: -5px;
    right: 5px;
    padding: 5px;
  }
  @media screen and (min-width: 768px) {
    top: -18px;
    right: -40px;
    padding: 5px;
  }
  @media screen and (min-width: 1280px) {
    top: -18px;
    right: -40px;
    padding: 5px;
  }
`;
