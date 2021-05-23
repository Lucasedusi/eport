import { useHistory } from 'react-router-dom';

import BurgerMenu from '../BurgerMenu';
import logo from '../../assets/logo.png';

import * as STD from './styles';
import { useAuth } from '../../hooks';

const Header = () => {
  const history = useHistory();
  const { isUserSignedIn, signOut } = useAuth();

  return (
    <STD.Container>
      <BurgerMenu />
      <STD.Logo src={logo} alt="logo"/>
      {isUserSignedIn ? (
        <STD.Login onClick={() => signOut()}>
          Sair
        </STD.Login>
      ) : (
        <STD.Login onClick={() => history.push('/signin')}>
          Entrar
        </STD.Login>
      )}
    </STD.Container>
  );
};

export default Header;
