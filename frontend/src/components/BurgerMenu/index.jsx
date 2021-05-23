import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../hooks';

const BurgerMenu = () => {
  const { isUserSignedIn } = useAuth();

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
        Início
      </NavLink>
      <NavLink
        to="/bidding"
        onClick={closeMenu}
        activeClassName="active-link"
        title="Clique para ir para licitações"
      >
        Licitações
      </NavLink>
      <NavLink
        to="/trail"
        onClick={closeMenu}
        exact
        activeClassName="active-link"
        title="Clique para ir para a trilha do empreendedor"
      >
        Trilha do empreendedor
      </NavLink>
      {!isUserSignedIn && <NavLink
        to="/signup"
        onClick={closeMenu}
        exact
        activeClassName="active-link"
        title="Clique para criar uma conta"
      >
        Criar uma conta
      </NavLink>}
    </Menu>
  );
};

export default BurgerMenu;
