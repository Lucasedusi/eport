import { Switch, Route } from 'react-router-dom';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Entrepreneur from '../pages/Entrepreneur';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Welcome} />
    <Route path='/signin' component={SignIn} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/entrepreneur' component={Entrepreneur} />

    <Route path='*' component={NotFound} />
  </Switch>
);

export default Routes;
