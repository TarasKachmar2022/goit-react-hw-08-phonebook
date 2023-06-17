import styled from 'styled-components';

export const DeveloperMainBlock = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 440px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;
    width: 650px;
  }
`;

export const DeveloperContainer = styled.div`
  list-style: none;
  backdrop-filter: blur(7.5px);
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (min-width: 320px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    width: 650px;
  }

  @media screen and (min-width: 1280px) {
    border-radius: 5px;
    padding-top: 29px;
    padding-bottom: 29px;
    width: 850px;
  }
`;

export const DeveloperImg = styled.img`
  @media screen and (min-width: 768px) {
    height: 482px;
    width: 320px;
  }

  @media screen and (min-width: 1280px) {
    height: 595px;
    width: 395px;
  }
`;

export const DeveloperContactsContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 14px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 32px;
  }
`;

export const DeveloperName = styled.h3`
  text-shadow: ${p => p.theme.shadows.textShadow};
  text-align: center;
  font-size: 36px;

  @media screen and (min-width: 768px) {
    margin: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;

export const DeveloperRole = styled.p`
  text-shadow: ${p => p.theme.shadows.textShadow};
  text-align: center;
  font-size: 32px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    margin: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const DeveloperContactsList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin: 14px;
  }

  @media screen and (min-width: 1280px) {
    margin: 30px 0;
  }
`;

export const DeveloperContactsItem = styled.li`
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`;

export const DeveloperLink = styled.a`
  padding: 20px;
  filter: drop-shadow(0 0 5px #fff);

  &:hover svg {
    fill: orange;
  }
`;

export const DeveloperSkilsTitle = styled.h4`
  text-shadow: ${p => p.theme.shadows.textShadow};
  text-align: center;
  font-size: 32px;

  @media screen and (min-width: 768px) {
    margin: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const DeveloperSkilsList = styled.ul`
  font-weight: 600;
  margin-left: 30px;
  text-align: start;

  @media screen and (min-width: 320px) {
    padding-bottom: 10px;
  }
`;

export const DeveloperSkilsItem = styled.li`
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
