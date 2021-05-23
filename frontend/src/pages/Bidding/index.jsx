import document from '../../assets/document.svg';
import { Link } from 'react-router-dom';

import { FaCalendarAlt, FaUtensils } from 'react-icons/fa';

import * as STD from './styles';

const Bidding = () => (
  <STD.Container>
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
      <Link to="/biddingSingle">
        <STD.BiddingBox>
          <STD.BiddingHeader>
            <STD.BiddingHeaderDate>
              <FaCalendarAlt size={16} color="#60AFFF" />
              <STD.BiddingDate>Abertura: 23/05/2021</STD.BiddingDate>
            </STD.BiddingHeaderDate>
            <STD.BiddingModalidade>Pregão Presencial</STD.BiddingModalidade>
          </STD.BiddingHeader>

          <STD.BiddingBody>
            <STD.BiddingTitle>Edital Nº 017/2021</STD.BiddingTitle>
            <STD.BiddingText>
              Formalização de Ata de Registro de Preços para o <br /> fornecimento de refeições: Café da manhã, almoço e{' '}
              <br /> jantar para os servidores da Secretaria Municipal de <br /> Infraestrutura.l
            </STD.BiddingText>
          </STD.BiddingBody>

          <STD.BiddingHeader>
            <STD.BiddingHeaderDate>
              <FaUtensils size={16} />
              <STD.BiddingDate>Alimentação</STD.BiddingDate>
            </STD.BiddingHeaderDate>

            <STD.BiddingMore>Ver Mais</STD.BiddingMore>
          </STD.BiddingHeader>
        </STD.BiddingBox>
      </Link>

      <Link to="/biddingSingle">
        <STD.BiddingBox>
          <STD.BiddingHeader>
            <STD.BiddingHeaderDate>
              <FaCalendarAlt size={16} color="#60AFFF" />
              <STD.BiddingDate>Abertura: 23/05/2021</STD.BiddingDate>
            </STD.BiddingHeaderDate>
            <STD.BiddingModalidadeOne>Tomada de Preço</STD.BiddingModalidadeOne>
          </STD.BiddingHeader>

          <STD.BiddingBody>
            <STD.BiddingTitle>Edital Nº 018/2021</STD.BiddingTitle>
            <STD.BiddingText>
              Formalização de Ata de Registro de Preços para o <br /> fornecimento de refeições: Café da manhã, almoço e{' '}
              <br /> jantar para os servidores da Secretaria Municipal de <br /> Infraestrutura.l
            </STD.BiddingText>
          </STD.BiddingBody>

          <STD.BiddingHeader>
            <STD.BiddingHeaderDate>
              <FaUtensils size={16} />
              <STD.BiddingDate>Alimentação</STD.BiddingDate>
            </STD.BiddingHeaderDate>
            <STD.BiddingMore>Ver Mais</STD.BiddingMore>
          </STD.BiddingHeader>
        </STD.BiddingBox>
      </Link>

      <Link to="/biddingSingle">
        <STD.BiddingBox>
          <STD.BiddingHeader>
            <STD.BiddingHeaderDate>
              <FaCalendarAlt size={16} color="#60AFFF" />
              <STD.BiddingDate>Abertura: 23/05/2021</STD.BiddingDate>
            </STD.BiddingHeaderDate>
            <STD.BiddingModalidadeTwo>Chamamento Público</STD.BiddingModalidadeTwo>
          </STD.BiddingHeader>

          <STD.BiddingBody>
            <STD.BiddingTitle>Edital Nº 019/2021</STD.BiddingTitle>
            <STD.BiddingText>
              Formalização de Ata de Registro de Preços para o <br /> fornecimento de refeições: Café da manhã, almoço e{' '}
              <br /> jantar para os servidores da Secretaria Municipal de <br /> Infraestrutura.l
            </STD.BiddingText>
          </STD.BiddingBody>

          <STD.BiddingHeader>
            <STD.BiddingHeaderDate>
              <FaUtensils size={16} />
              <STD.BiddingDate>Alimentação</STD.BiddingDate>
            </STD.BiddingHeaderDate>
            <STD.BiddingMore>Ver Mais</STD.BiddingMore>
          </STD.BiddingHeader>
        </STD.BiddingBox>
      </Link>

      <Link to="/biddingSingle">
        <STD.BiddingBox>
          <STD.BiddingHeader>
            <STD.BiddingHeaderDate>
              <FaCalendarAlt size={16} color="#60AFFF" />
              <STD.BiddingDate>Abertura: 23/05/2021</STD.BiddingDate>
            </STD.BiddingHeaderDate>
            <STD.BiddingModalidadeThre>Concorrência</STD.BiddingModalidadeThre>
          </STD.BiddingHeader>

          <STD.BiddingBody>
            <STD.BiddingTitle>Edital Nº 020/2021</STD.BiddingTitle>
            <STD.BiddingText>
              Formalização de Ata de Registro de Preços para o <br /> fornecimento de refeições: Café da manhã, almoço e{' '}
              <br /> jantar para os servidores da Secretaria Municipal de <br /> Infraestrutura.l
            </STD.BiddingText>
          </STD.BiddingBody>

          <STD.BiddingHeader>
            <STD.BiddingHeaderDate>
              <FaUtensils size={16} />
              <STD.BiddingDate>Alimentação</STD.BiddingDate>
            </STD.BiddingHeaderDate>
            <STD.BiddingMore>Ver Mais</STD.BiddingMore>
          </STD.BiddingHeader>
        </STD.BiddingBox>
      </Link>
    </STD.Bidding>
  </STD.Container>
);

export default Bidding;
