import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 42px;
  background-color: ${({ theme }) => theme.colors.secondaryVariant};
`;

export const Content = styled.div`
  margin: 45px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textOnSecondary};
`;

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textOnSecondary};
  margin: 15px 0 0 0;
`;

export const ImgBackground = styled.img``;

export const Button = styled.div`
  display: flex;
  margin-top: 36px;
  align-items: center;
  justify-content: center;

  a {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px 30px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.textOnPrimary};
    text-decoration: none;
    box-shadow: 2px 2px 6px rgb(0 0 0 / 25%);
  }

  strong {
    color: #eec643;
  }
`;
