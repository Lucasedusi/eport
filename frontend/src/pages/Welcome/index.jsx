import { Link, useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';

import animationData from '../../assets/animation.json';

import * as STD from './styles';
import { useEffect } from 'react';

const options = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Welcome = () => {
  const history = useHistory();

  useEffect(() => {
    const redirect = setTimeout(() => {
      history.push('/entrepreneur');
    }, 4000);

    return () => {
      clearTimeout(redirect);
    }
  }, [history]);

  return (
    <STD.Container>
      <STD.Title>
        Trilhe novos caminhos <br /> como empreendedor
      </STD.Title>

      <Lottie options={options} height={275} width={300} />

      <STD.SubTitle>
        Olá, para todos os empreendedores sua jornada começa bem aqui!
      </STD.SubTitle>

      <STD.Button>
        <Link to="/entrepreneur">Começar</Link>
      </STD.Button>
    </STD.Container>
  );
};

export default Welcome;
