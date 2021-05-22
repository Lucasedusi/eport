import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  padding: 0 42px;
  background-color: ${({ theme }) => theme.colors.secondaryVariant};
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textOnSecondary};
`;

export const SubTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.75rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textOnSecondary};
`;

export const Button = styled.div`
  display: flex;

  a {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px 30px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.textOnPrimary};

    &:active {
      background-color: ${({ theme }) => shade(0.2, theme.colors.primary)};
    }
  }
`;

