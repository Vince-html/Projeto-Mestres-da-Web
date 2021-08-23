import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../store';
import Home from '../View/Home';
import Intro from './../View/SplashScreen/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
      </Provider>
    </BrowserRouter>
  );
};

export default Routes;
