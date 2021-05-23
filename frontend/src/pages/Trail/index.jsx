import document from '../../assets/document.svg';
import { Link } from 'react-router-dom';
import load from '../../assets/load.svg';
import people from '../../assets/people.svg';

import back from '../../assets/back.png';

import { FaCalendarAlt, FaUtensils, FaChevronRight } from 'react-icons/fa';

import * as STD from './styles';

const Bidding = () => (
  <STD.Container>
    <STD.Help>
      <STD.Light src={load} />
      <STD.TitleHelp>Formalizar seu empreendimento é algo que pode ser feito pela internet!</STD.TitleHelp>
    </STD.Help>

    <STD.Header>
      <STD.TitleHeader>
        Se você ainda não é MEI (Micro Empreendedor Individual) ou ME (Micro Empresa) e não faz ideia de onde se
        enquadra então verifique nosso processo decisor
      </STD.TitleHeader>
      <STD.Light src={people} />
    </STD.Header>

    <STD.Background>
      <STD.Img src={back} />
    </STD.Background>

    <STD.Button>
      <a href="https://www.gov.br/pt-br/servicos/realizar-registro-como-microempreendedor-individual-mei">Abrir MEI</a>
      <FaChevronRight size={22} color="#fff" />
    </STD.Button>
  </STD.Container>
);

export default Bidding;
