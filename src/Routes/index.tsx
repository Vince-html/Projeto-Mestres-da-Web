import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../View/Home';
import Films from '../View/Home/films';
import Hqs from '../View/Home/hqs';
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
        <Route path="/films" exact>
          <Films />
        </Route>
        <Route path="/hqs" exact>
          <Hqs />
        </Route>
        {/* <ProtectedRoute path="/conta" component={RoutesUser} /> */}
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
