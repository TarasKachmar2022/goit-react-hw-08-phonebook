import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(7.5px);
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;
`;

export const Text = styled.p`
  margin: 8px 5px 16px 0;
`;

export const StyledBy = styled.p`
  margin: 8px 0 16px 5px;
`;

export const StudentBtn = styled(Link)`
  margin: 8px 5px 16px 5px;
  border: none;
  display: inline-block;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  text-decoration: underline;
  cursor: pointer;
  color: #000000;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #ff6b08;
  }

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
