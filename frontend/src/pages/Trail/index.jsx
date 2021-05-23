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

    <STD.BoxMain>
      <STD.BoxChildrenLeft>TESTE</STD.BoxChildrenLeft>
      <STD.BoxChildrenRight>YESTE</STD.BoxChildrenRight>
    </STD.BoxMain>
  </STD.Container>
);

export default Bidding;
