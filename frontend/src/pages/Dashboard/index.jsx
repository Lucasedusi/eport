import { Link } from 'react-router-dom';

import backgroundImg from '../../assets/background.png';

import * as STD from './styles';

const Dashboard = () => (
  <STD.Container>
    <STD.Content>
      <STD.Title>
        Trilhe novos caminhos como <br /> empreendedor
      </STD.Title>
      <STD.SubTitle>
        Participe das compras públicas <br /> de Araguaína
      </STD.SubTitle>

      <STD.ImgBackground src={backgroundImg} height={245} width={245} />

      <STD.Button>
        <Link to="/entrepreneur">Sobre o <strong>EPort</strong></Link>
      </STD.Button>
    </STD.Content>
  </STD.Container>
);

export default Dashboard;
