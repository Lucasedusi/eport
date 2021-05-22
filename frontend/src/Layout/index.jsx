import { useRouteMatch } from "react-router-dom";

import { Header } from '../components';
import Routes from '../Routes';

import * as STD from './styles';

const Layout = () => {
  const { isExact } = useRouteMatch('/');

  return (
    <STD.Container>
      {!isExact && <Header />}
      <STD.Main>
        <Routes />
      </STD.Main>
    </STD.Container>
  );
}

export default Layout;
