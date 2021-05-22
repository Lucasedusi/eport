import { FiMenu } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import logo from '../../assets/logo.png'

import * as STD from './styles';

const Header = () => {
  const theme = useTheme();
  return (
    <STD.Container>
      <FiMenu color={theme.colors.textOnSecondary} size={25} />
      <STD.Logo src={logo} alt="logo"/>
      <STD.Login>Login</STD.Login>
    </STD.Container>
  );
};

export default Header;
