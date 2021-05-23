import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

const BurgerMenu = () => {
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
        title="Clique para ir para a trilha do empreendedor"
      >
        Trilha do empreendedor
      </NavLink>
      <NavLink
        to="/dashboard"
        onClick={closeMenu}
        activeClassName="active-link"
        title="Clique para ir para a tela inicial"
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/"
        onClick={closeMenu}
        exact
        activeClassName="active-link"
        title="Clique para ir para"
      >
        Tela inicial
      </NavLink>
    </Menu>
  );
};

export default BurgerMenu;
