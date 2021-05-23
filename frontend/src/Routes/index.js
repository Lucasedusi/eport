import { Switch, Route, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Entrepreneur from '../pages/Entrepreneur';
import Bidding from '../pages/Bidding';
import Trail from '../pages/Trail';
import BiddingSingle from '../pages/BiddingSingle';
import NotFound from '../pages/NotFound';

const Routes = () => {
  const { isUserSignedIn } = useAuth();

  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/entrepreneur" component={Entrepreneur} />
      <Route path="/bidding" component={Bidding} />
      <Route path="/biddingSingle" component={BiddingSingle} />
      <Route path="/bidding" component={Bidding} />
      <Route path="/trail" component={Trail} />
      <Route path='/signin' component={SignIn}>
        {isUserSignedIn && <Redirect to="/dashboard" />}
      </Route>
      <Route path='/signup' component={SignUp}>
        {isUserSignedIn && <Redirect to="/dashboard" />}
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
