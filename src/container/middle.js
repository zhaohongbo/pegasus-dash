import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { pages } from '../utils/page'
import './middle.css'

export default class Middle extends React.Component {

  createRouter(router) {
    return (
      <Route key={router.path} path={router.path} component={router.component} />
    );
  }

  render() {
    return (
      <Switch>
        {
          pages.map(this.createRouter)
        }
        <Redirect exact from="/" to="/maps" />
      </Switch>
    );
  }
}