import document from '../../assets/document.svg';

import * as STD from './styles';

const Bidding = () => (
  <STD.Container>
    <STD.Help>
      <STD.TitleHelp>Edital Nº 017/2021</STD.TitleHelp>
    </STD.Help>

    <STD.Content>
      <STD.TitleTextModalidade>
        <strong>MODALIDADE: </strong>RDC PRESENCIAL N˚ 006/2013
      </STD.TitleTextModalidade>
    </STD.Content>

    <STD.Content>
      <STD.TitleDate>
        <strong>DATA/HORÁRIO ABERTURA:</strong> 20/12/2013 às 14h:30MIN{' '}
      </STD.TitleDate>
    </STD.Content>

    <STD.Content>
      <STD.TitleObjeto>
        <strong>OBJETO:</strong> Contratação de Pessoa Jurídica especializada para realização de obras e serviços de
        engenharia relacionados à cobertura de uma quadra esportiva escolar, na Escola Municipal Willian Castelo Branco
        Martins{' '}
      </STD.TitleObjeto>
    </STD.Content>

    <STD.Content>
      <STD.TitleJulgamento>
        <strong>CRITÉRIO DE JULGAMENTO:</strong> Menor preço global
      </STD.TitleJulgamento>
    </STD.Content>

    <STD.Content>
      {' '}
      <STD.TitleContratacao>
        <strong>REGIMA DE CONTRATAÇÃO:</strong> Empreitada por preço global
      </STD.TitleContratacao>{' '}
    </STD.Content>

    <STD.Content>
      <STD.TitleDisputa>
        <strong>LOCAL DA SESSÃO PÚBLICA:</strong> Sede da Prefeitura Municipal de Araguaína, Auditório da comissão de
        Licitação, situada na Rua 25 de Dezembro, N˚265 - Araguaína - TO
      </STD.TitleDisputa>
    </STD.Content>

    <STD.Content>
      {' '}
      <STD.TitleSessao>
        <strong>PROCESSO N˚: </strong>01729/2013
      </STD.TitleSessao>
    </STD.Content>

    <STD.Content>
      <STD.TitleProcesso>
        <strong>INTERESSADO: </strong>Secretária Municipal de Educação
      </STD.TitleProcesso>
    </STD.Content>
  </STD.Container>
);

export default Bidding;
