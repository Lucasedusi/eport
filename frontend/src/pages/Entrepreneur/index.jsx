import luz from '../../assets/luz.svg';
import userBadge from '../../assets/user.svg';
import checkBadge from '../../assets/check.svg';
import dollarBadge from '../../assets/dollar.svg';
import newsBadge from '../../assets/news.svg';
import detailsBadge from '../../assets/details.svg';

import * as STD from './styles';

const Entrepreneur = () => (
  <STD.Container>
    <STD.Help>
      <img alt="luz" src={luz} />
      <STD.Title>
        Precisa de ajuda para <br /> começar?
      </STD.Title>
    </STD.Help>

    <STD.RowBox>
      <STD.LeftBox>
        <STD.Card>
          <img alt="userBadge" src={userBadge} />
          <STD.TextBox>Formalize seu empreendimento como MEI ou ME</STD.TextBox>
        </STD.Card>
      </STD.LeftBox>

      <STD.RightBox>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </STD.RightBox>

    </STD.RowBox>

    <STD.RowBox>
      <STD.LeftBox>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </STD.LeftBox>

      <STD.RightBox>
        <STD.Card>
          <img alt="checkBadge" src={checkBadge} />
          <STD.TextBox>Se inscreva no município e emita seu alvará de funcionamento</STD.TextBox>
        </STD.Card>
      </STD.RightBox>
    </STD.RowBox>

    <STD.RowBox>
      <STD.LeftBox>
        <STD.Card>
          <img alt="dollarBadge" src={dollarBadge} />
          <STD.TextBox>Se prepare para emitir notas fiscais e saiba as possibilidades de emissão</STD.TextBox>
        </STD.Card>
      </STD.LeftBox>

      <STD.RightBox>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </STD.RightBox>
    </STD.RowBox>

    <STD.RowBox>
      <STD.LeftBox></STD.LeftBox>

      <STD.RightBox>
        <STD.Card>
          <img alt="newsBadge" src={newsBadge} />
          <STD.TextBox>Se prepare para emitir notas fiscais e saiba as possibilidades de emissão</STD.TextBox>
        </STD.Card>
      </STD.RightBox>
    </STD.RowBox>

    <STD.HelpFooter>
      <STD.TitleHelpFooter>
      Concorra nos editais de licitação das compras públicas e contribua para o crescimento da sua cidade
      </STD.TitleHelpFooter>
      <img alt="detailsBadge" src={detailsBadge} />
    </STD.HelpFooter>
  </STD.Container>
);

export default Entrepreneur;
