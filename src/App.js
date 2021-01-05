import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <SignIn/>
        </Route>
        <Route path={ROUTES.BROWSE}>
          <Browse/>
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <SignUp/>
        </Route>
        <Route path={ROUTES.HOME}>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
