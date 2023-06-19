import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(7.5px);
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (width: 320px) {
    padding: 5px 10px;
  }
  @media screen and (width: 768px) {
    padding: 0 30px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 40px;
  }
`;

export const Text = styled.p`
  margin: 8px 5px 8px 5px;
  @media screen and (min-width: 320px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledBy = styled.p`
  margin: 8px 5px 8px 5px;
  @media screen and (min-width: 320px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StudentBtn = styled(Link)`
  margin: 8px 5px 8px 5px;
  border: none;
  display: inline-block;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.14;
  text-decoration: underline;
  cursor: pointer;
  color: #000000;
  background-color: transparent;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: #ff6b08;
  }

  @media screen and (min-width: 320px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
