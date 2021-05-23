import BurgerMenu from '../BurgerMenu';
import logo from '../../assets/logo.png';

import * as STD from './styles';

const Header = () => {

  return (
    <STD.Container>
      <BurgerMenu />
      <STD.Logo src={logo} alt="logo"/>
      <STD.Login>Login</STD.Login>
    </STD.Container>
  );
};

export default Header;
