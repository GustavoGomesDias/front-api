import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
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
      <MyRoute exact path="/" component={Login} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
