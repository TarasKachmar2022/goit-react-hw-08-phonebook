import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7px 10px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 20px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    text-align: center;
  }
`;
