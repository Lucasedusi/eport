import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks';

import * as STD from './styles';

const SignIn = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    inputErr: '',
  });
  const { signIn, error, setError } = useAuth();

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setError(null);
    setValues({ ...values, [name]: value, inputErr: '' });
  };

  const handleSignIn = event => {
    event.preventDefault();
    const { username, password } = values;

    if (!username || !password) {
      return setValues({ ...values, inputErr: 'Preenchimento obrigatório' });
    }
    signIn({ username, password });
  };

  return (
    <STD.Container>
      <STD.Form>
        <STD.Title>Boas-vindas novamente!</STD.Title>
        <STD.SubTitle>Pronto pra avançar na sua jornada?</STD.SubTitle>
        <STD.ErrorContainer>
          <STD.NotFoundError error={error}>{error?.data.message}</STD.NotFoundError>
          <STD.NoInputError error={values.inputErr}>{values.inputErr}</STD.NoInputError>
        </STD.ErrorContainer>
        <STD.Input
          autoFocus={true}
          name="username"
          placeholder="Username"
          title="Digite seu CPF/CNPJ"
          type="text"
          error={values.inputErr}
          value={values.username}
          onChange={handleInputChange}
        />
        <STD.Input
          name="password"
          placeholder="Password"
          title="Digite seu Password"
          type="password"
          error={values.inputErr}
          value={values.password}
          onChange={handleInputChange}
        />
        <STD.Button type="submit" title="Clique para entrar no sistema">
          <a href="#" onClick={handleSignIn}>Entrar</a>
        </STD.Button>
        <STD.ActionContainer>
          <p title="Ainda não implementado"></p>
          <Link to="/signup" title="Crie uma conta para entrar no sistema">
            Criar uma conta
          </Link>
        </STD.ActionContainer>
      </STD.Form>
      <STD.FormFooter>
        <p>TechJS</p>
      </STD.FormFooter>
    </STD.Container>
  );
};

export default SignIn;
