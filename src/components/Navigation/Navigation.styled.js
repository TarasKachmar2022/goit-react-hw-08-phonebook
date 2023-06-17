import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.div`
  padding: 15px;
`;

export const Link = styled(NavLink)`
  padding-left: 30px;
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
`;
