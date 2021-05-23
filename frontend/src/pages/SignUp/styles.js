import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(min-width: 767px) {
    min-height: 100vh;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => {
    return theme.title === 'light' ? '#fff' : theme.colors.primary;
  }};
  width: 100%;
  padding: 2rem;
  @media(min-width: 767px) {
  padding: 2.5rem;
  border-radius: 4px;
  border: 2px solid #cdd4d9;
  max-width: 445px;
  box-shadow: 4px 4px rgba(6, 41, 66, 0.1);
  }
`;

export const Title = styled.h1`
  margin-bottom: 1rem;

  img {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const ErrorContainer = styled.div``;

export const AlreadyExistError = styled.p`
  color: #e81123;
  display: ${({ error }) => (error ? 'block' : 'none')};
`;

export const NoInputError = styled.p`
  color: #e81123;
  display: ${({ error }) => (error ? 'block' : 'none')};
`;

export const CheckboxControl = styled.div`
  display: flex;
  margin-bottom: 0.75rem;

  input[type=checkbox] {
    width: initial;
    height: initial;
    margin-right: 0.25rem;
  }

  label {
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text2};
  margin-bottom: 1rem;
  width: 100%;
  border: thin solid #666;
  background-color: ${({ theme }) => {
    return theme.title === 'light' ? '#fff' : '#ccc';
  }};
  border-color: ${({ error, value }) => (error && !value ? '#e81123' : 'none')};

  &:focus {
    border-radius: 10px;
    border-color: ${({ theme }) => theme.colors.primary}
  }
`;

export const Select = styled.select`
  padding: 2.5px 10px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text2};
  margin-bottom: 1rem;
  width: 100%;

  &:focus {
    border-radius: 10px;
    border-color: ${({ theme }) => theme.colors.primary}
  }
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

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;

  a {
    text-decoration: underline;
    transition: all 0.3s;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      text-decoration: none;
      color: #666;
    }
  }
`;

export const FormFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  max-width: 445px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  padding: 20px 0;
`;
