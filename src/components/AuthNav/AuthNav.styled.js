import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  padding: 15px;
`;

export const NavLinkWrap = styled.div`
  padding-right: 30px;
`;

export const NavLink = styled(Link)`
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
`;
