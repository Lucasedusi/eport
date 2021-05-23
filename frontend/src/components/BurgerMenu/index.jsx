import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiFileText,
  FiMap,
  FiArrowUpCircle,
  FiArrowRightCircle,
  FiLogOut,
} from 'react-icons/fi';

import { useAuth } from '../../hooks';

const BurgerMenu = () => {
  const { isUserSignedIn, signOut } = useAuth();

  const closeMenu = () => {
    const $btnClose = document.querySelector('#react-burger-cross-btn');
    $btnClose.click();
  };

  return (
    <Menu>
      <NavLink
        to="/entrepreneur"
        onClick={closeMenu}
        activeClassName="active-link"
        title="Clique para ir para o início"
      >
        <FiHome size={20} />
        <span>Início</span>
      </NavLink>
      <NavLink
        to="/bidding"
        onClick={closeMenu}
        activeClassName="active-link"
        title="Clique para ir para licitações"
      >
        <FiFileText size={20} />
        <span>Licitações</span>
      </NavLink>
      <NavLink
        to="/trail"
        onClick={closeMenu}
        exact
        activeClassName="active-link"
        title="Clique para ir para a trilha do empreendedor"
      >
        <FiMap size={20} />
        <span>Trilha do empreendedor</span>
      </NavLink>
      {!isUserSignedIn && <NavLink
        to="/signin"
        onClick={closeMenu}
        exact
        activeClassName="active-link"
        title="Clique para entrar no sistema"
      >
        <FiArrowRightCircle size={20} />
        <span>Entrar</span>
      </NavLink>}
      {!isUserSignedIn && <NavLink
        to="/signup"
        onClick={closeMenu}
        exact
        activeClassName="active-link"
        title="Clique para criar uma conta"
      >
        <FiArrowUpCircle size={20} />
        <span>Criar uma conta</span>
      </NavLink>}
    </Menu>
  );
};

export default BurgerMenu;
