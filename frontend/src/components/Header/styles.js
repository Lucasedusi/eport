import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-bottom: 12px;
`;

export const Logo = styled.img`
  height: 42;
  width: 119;
  margin: 0 auto;
`;

export const Login = styled.h2`
  position: absolute;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  right: 18px;
  color: ${({ theme }) => theme.colors.textOnSecondary};
`;

