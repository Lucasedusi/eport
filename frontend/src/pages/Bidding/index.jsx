import document from '../../assets/document.svg';

import * as STD from './styles';

const Bidding = () => (
  <STD.Container>
    <STD.TopBar>
      <STD.Title>Editais de Licitação</STD.Title>
    </STD.TopBar>
    <STD.Help>
      <STD.Document src={document} />
      <STD.TitleHelp>
        Tenha acesso a todos os <br /> editais de licitação
      </STD.TitleHelp>
    </STD.Help>

    <STD.BoxFilterPrimary>
      <STD.LabelModalidade>Modalidade:</STD.LabelModalidade>
      <STD.FilterModalidade>
        <option value>Pregão Presencial</option>
        <option>Tomada de Preço</option>
        <option>Chamamento Público</option>
      </STD.FilterModalidade>
    </STD.BoxFilterPrimary>

    <STD.Content>
      <STD.BoxFilter>
        <STD.LabelModalidade>Segmento:</STD.LabelModalidade>
        <STD.FilterModalidade>
          <option value>Alimentação</option>
          <option>Engenharia e Construção</option>
          <option>Saúde e Laboratório</option>
        </STD.FilterModalidade>
      </STD.BoxFilter>

      <STD.BoxFilter>
        <STD.LabelModalidade>Data de abertura:</STD.LabelModalidade>
        <STD.FilterModalidade>
          <option value>23/05/2021</option>
          <option>12/05/2021</option>
          <option>14/05/2021</option>
        </STD.FilterModalidade>
      </STD.BoxFilter>
    </STD.Content>

    <STD.Bidding>
      
    </STD.Bidding>
  </STD.Container>
);

export default Bidding;
