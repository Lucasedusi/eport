import document from '../../assets/document.svg';
import { Link } from 'react-router-dom';
import load from '../../assets/load.svg';
import people from '../../assets/people.svg';

import { FaCalendarAlt, FaUtensils } from 'react-icons/fa';

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

    <STD.BoxInitial>
      <STD.BoxText>
        Você é o único funcionário da empresa, ou tem no máximo mais uma pessoa trabalhando com você?
      </STD.BoxText>
    </STD.BoxInitial>

    <STD.BoxMain>
      <STD.BoxChildrenLeft>
        Seu rendimento anual é maior do que R$81.000,00? Ou poderá chegar a ser?
      </STD.BoxChildrenLeft>
    </STD.BoxMain>

    <STD.BoxMain>
      <STD.BoxChildrenLeft>Você pretende contratar mais funcionários durante esse ano?</STD.BoxChildrenLeft>
    </STD.BoxMain>

    <STD.BoxChildren>
      <STD.BoxChildrenRight>
        Seu empreendimento se enquadra como Micro Empresa. Para formalizar entre em contato com a Sala do Empreendedor{' '}
        <br />
        (63) 3411-7026
      </STD.BoxChildrenRight>
    </STD.BoxChildren>

    <STD.BoxMain>
      <STD.BoxChildrenLeft>
        Seu empreendimento se enquadra como MEI. A abertura pode ser feita online e gratuitamente. <br />
        <br />
        <a href="https://www.gov.br/pt-br/servicos/realizar-registro-como-microempreendedor-individual-mei">
          https://www.gov.br/pt-br/servicos/realizar-registro-como-microempreendedor-individual-mei
        </a>
      </STD.BoxChildrenLeft>
    </STD.BoxMain>
  </STD.Container>
);

export default Bidding;
