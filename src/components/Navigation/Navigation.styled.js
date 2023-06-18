import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  font-weight: 600;
  text-transform: uppercase;
  transition: color 400ms linear;

  &.active {
    color: ${p => p.theme.colors.orange};
  }

  &:hover {
    color: ${p => p.theme.colors.orange};
  }

  @media screen and (min-width: 320px) {
    font-size: 12px;
    padding: 15px 5px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 15px;
  }
`;
