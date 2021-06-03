import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

/*
 * As rotas tem que tá entre BrowserRouter
 * Switch permite apenas que uma rota seja acessada por vez
 * exact => só acessa o componente se acessar especificamente aquela rota
 */

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
