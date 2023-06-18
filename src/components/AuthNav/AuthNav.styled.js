import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkWrap = styled.div`
  @media screen and (min-width: 320px) {
    margin-right: 5px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 10px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  border-radius: 25px;
  border: 2px solid ${p => p.theme.colors.orange};
  padding: 5px 10px;
  text-decoration: none;
  color: ${p => p.theme.colors.orange};
  background-color: transparent;
  font-weight: 600;
  text-transform: uppercase;
  transition: color 400ms linear;
  transition: background-color 400ms linear;

  &.active {
    background-color: ${p => p.theme.colors.orange};
    color: white;
  }

  &:hover {
    background-color: ${p => p.theme.colors.orange};
    color: white;
  }

  @media screen and (min-width: 320px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const NavLinkText = styled.span`
  margin-left: 3px;
`;
