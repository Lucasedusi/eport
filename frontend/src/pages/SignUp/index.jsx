import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks';
import api from '../../services/api';

import * as STD from './styles';

const SignUp = () => {
  const [segments, setSegments] = useState([]);
  const [values, setValues] = useState({
    name: '',
    username: '',
    password: '',
    inputErr: '',
  });
  const [checks, setChecks] = useState({
    events_notification: false,
    public_bids_notification: false,
  });

  const { signUp, error, setError } = useAuth();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setError(null);
    setValues({ ...values, [name]: value, inputErr: '' });
  }

  const handleCheckChange = event => {
    const { name, check } = event.target;
    setChecks({ ...checks, [name]: !check });
  }

  const handleSignUp = event => {
    event.preventDefault();
    const { name, username, password } = values;

    if (name.length < 3) {
      return setValues({
        ...values,
        inputErr: 'Informe um nome com mais de 2 letras',
      });
    }

    if (!username || !password) {
      return setValues({ ...values, inputErr: 'Preenchimento obrigatório' });
    }
    signUp({ name, username, password });
  }

  const loadSegments = async () => {
    const { data } = await api.get('segments');
    setSegments(data.segments);
  };

  useEffect(() => {
    loadSegments();
  }, []);

  return (
    <STD.Container>
      <STD.Form>
        <STD.Title>Boas-vindas!</STD.Title>
        <STD.SubTitle>Sua jornada começa ao criar uma conta</STD.SubTitle>
        <STD.ErrorContainer>
          <STD.AlreadyExistError error={error}>
            {error?.data.message}
          </STD.AlreadyExistError>
          <STD.NoInputError error={values.inputErr}>{values.inputErr}</STD.NoInputError>
        </STD.ErrorContainer>
        <STD.Input
          autoFocus={true}
          name="name"
          placeholder="Nome"
          title="Digite um Nome"
          type="text"
          error={values.inputErr}
          value={values.name}
          onChange={handleInputChange}
        />
        <STD.Input
          name="username"
          placeholder="Username (CPF/CNPJ)"
          title="Digite seu CPF ou CNPJ"
          type="text"
          error={values.inputErr}
          value={values.username}
          onChange={handleInputChange}
        />
        <STD.Input
          name="password"
          placeholder="Password"
          title="Digite um Password"
          type="password"
          error={values.inputErr}
          value={values.password}
          onChange={handleInputChange}
        />
        <STD.Select value={values.segment_id} onChange={handleInputChange} name="seggment_id">
          <option value="null">Qual o segmento da sua empresa</option>
          {segments?.map(({ id, name }) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </STD.Select>
        <STD.CheckboxControl>
          <STD.Input
            id="events_notification"
            name="events_notification"
            type="checkbox"
            defaultChecked={checks.events_notification}
            onChange={handleCheckChange}
            />
          <label htmlFor="events_notification">
            Receber notificações de novos eventos
          </label>
        </STD.CheckboxControl>
        <STD.CheckboxControl>
          <STD.Input
            id="public_bids_notification"
            name="public_bids_notification"
            type="checkbox"
            defaultChecked={checks.public_bids_notification}
            onChange={handleCheckChange}
            />
          <label htmlFor="public_bids_notification">
            Receber notificações de novas licitações
          </label>
        </STD.CheckboxControl>
        <STD.Button type="submit" title="Clique para criar a conta">
          <a href="#" onClick={handleSignUp}>Criar</a>
        </STD.Button>
        <STD.ActionContainer>
          <p></p>
          <Link
            to="/signin"
            title="Use uma conta existente para entrar no sistema"
          >
            Entrar com uma conta existente
          </Link>
        </STD.ActionContainer>
      </STD.Form>
      <STD.FormFooter>
        <p>TechJS</p>
      </STD.FormFooter>
    </STD.Container>
  );
};

export default SignUp;
