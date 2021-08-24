import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../View/Home';
import Intro from './../View/SplashScreen/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Intro />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        {/* <ProtectedRoute path="/conta" component={RoutesUser} /> */}
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
