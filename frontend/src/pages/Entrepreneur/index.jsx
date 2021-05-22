import luz from '../../assets/luz.svg';

import * as STD from './styles';
import userBadge from '../../assets/user.svg';
import checkBadge from '../../assets/check.svg';
import dollarBadge from '../../assets/dollar.svg';
import newsBadge from '../../assets/news.svg';
import detailsBadge from '../../assets/details.svg';

const Entrepreneur = () => (
  <STD.Container>
    <STD.TopBar>
      <STD.Title>Trilha do Empreendedor</STD.Title>
    </STD.TopBar>
    <STD.Help>
      <STD.Light src={luz} />
      <STD.TitleHelp>
        Precisa de ajuda para <br /> começar?
      </STD.TitleHelp>
    </STD.Help>

    <STD.BoxPrimary>
      <STD.BoxPrimaryChildrenLeft>
        <STD.UserBadge src={userBadge} />
        <STD.TextBoxPrimary>Formalize seu empreendimento como MEI ou ME</STD.TextBoxPrimary>
      </STD.BoxPrimaryChildrenLeft>

      <STD.BoxPrimaryChildrenCenter>
        <STD.BorderPrimary></STD.BorderPrimary>
      </STD.BoxPrimaryChildrenCenter>

      <STD.BoxPrimaryChildrenEnd></STD.BoxPrimaryChildrenEnd>
    </STD.BoxPrimary>

    <STD.BoxSecond>
      <STD.BoxPrimaryChildrenCenter>
        <STD.BorderSecond></STD.BorderSecond>
      </STD.BoxPrimaryChildrenCenter>

      <STD.BoxPrimaryChildrenEnd></STD.BoxPrimaryChildrenEnd>
      <STD.BoxSecondChildrenLeft>
        <STD.CheckBadge src={checkBadge} />
        <STD.TextBoxSecond>Se inscreva no município e emita seu alvará de funcionamento</STD.TextBoxSecond>
      </STD.BoxSecondChildrenLeft>
    </STD.BoxSecond>

    <STD.BoxThird>
      <STD.BoxThirdChildrenLeft>
        <STD.DollarBadge src={dollarBadge} />
        <STD.TextBoxThird>Se prepare para emitir notas fiscais e saiba as possibilidades de emissão</STD.TextBoxThird>
      </STD.BoxThirdChildrenLeft>
      <STD.BoxPrimaryChildrenCenter>
        <STD.BorderThird></STD.BorderThird>
      </STD.BoxPrimaryChildrenCenter>

      <STD.BoxPrimaryChildrenEnd></STD.BoxPrimaryChildrenEnd>
    </STD.BoxThird>

    <STD.BoxFourth>
      <STD.BoxPrimaryChildrenCenter></STD.BoxPrimaryChildrenCenter>

      <STD.BoxPrimaryChildrenEnd></STD.BoxPrimaryChildrenEnd>
      <STD.BoxFourthChildrenLeft>
        <STD.NewsBadge src={newsBadge} />
        <STD.TextBoxFourth>Se prepare para emitir notas fiscais e saiba as possibilidades de emissão</STD.TextBoxFourth>
      </STD.BoxFourthChildrenLeft>
    </STD.BoxFourth>

    <STD.HelpFooter>
      <STD.TitleHelpFooter>
      Concorra nos editais de licitação das compras públicas e contribua para o crescimento da sua cidade
      </STD.TitleHelpFooter>
      <STD.LightFooter src={detailsBadge} />
    </STD.HelpFooter>
  </STD.Container>
);

export default Entrepreneur;
