import luz from '../../assets/luz.svg';

import * as STD from './styles';

const Entrepreneur = () => (
  <STD.Container>
    <STD.TopBar>
      <STD.Title>Trilha do Empreendedor</STD.Title>
    </STD.TopBar>
    <STD.Content>
      <STD.Help>
        <STD.Image src={luz} />
        <STD.TitleHelp>
          Precisa de ajuda para <br/> começar?
        </STD.TitleHelp>
      </STD.Help>
    </STD.Content>
  </STD.Container>
);

export default Entrepreneur;
