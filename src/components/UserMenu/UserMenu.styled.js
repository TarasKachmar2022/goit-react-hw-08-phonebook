import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px;
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const Title = styled.div`
  font-weight: 600;
  margin-left: 10px;
  color: ${p => p.theme.colors.white};
`;

export const LogoutWrap = styled.div`
  margin-left: 10px;
`;

export const Logout = styled.button`
  display: flex;
  text-decoration: none;
  font-weight: 600;
  border-radius: 25px;
  border: 2px solid ${p => p.theme.colors.orange};
  padding: 5px 10px;
  color: ${p => p.theme.colors.orange};
  background-color: transparent;
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

export const LogoutText = styled.span`
  margin-left: 3px;
`;
