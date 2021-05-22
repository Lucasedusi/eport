import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 15px 15px;
`;

export const Logo = styled.img`
  height: 42;
  width: 119;
`;

export const Login = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textOnSecondary};
`;

