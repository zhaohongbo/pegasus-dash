import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Container from '../container'
import Login from '../container/login'
import { getUserInfo } from '../services/authService'
import AuthorizedRoute from '../components/authorize/AuthorizedRoute'

export default class RootRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <AuthorizedRoute
            path="/"
            render={props => <Container {...props} />}
            authority={getUserInfo()}
            redirectPath="/login"
          />
        </Switch>
      </HashRouter>
    );
  }
}
