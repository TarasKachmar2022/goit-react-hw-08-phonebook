import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  margin: 20px 0 20px 30px;
`;

export const BackHomeBtn = styled(Link)`
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid ${p => p.theme.colors.grey};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.darkGrey};
  padding: 5px 10px;
  color: ${p => p.theme.colors.black};
  transition: background-color 400ms linear;

  &:active,
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.orange};
    color: white;
  }

  @media screen and (min-width: 320px) {
    font-size: 16px;
    border-radius: 7px;
    padding: 7px 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    border-radius: 10px;
    padding: 9px 18px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
    border-radius: 10px;
    padding: 10px 20px;
  }
`;

export const MessageTitle = styled.div`
  text-align: center;
`;

export const MainTitle = styled.h1`
  font-size: 200px;
  margin-top: 60px;
  margin-bottom: 30px;
`;

export const NotFoundTitle = styled.h2`
  font-size: 72px;
  margin-top: 0;
  margin-bottom: 30px;
`;

export const DescTitle = styled.p`
  font-size: 28px;
  margin-top: 0;
`;
