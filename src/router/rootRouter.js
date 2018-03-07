import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router'
import Container from '../container'
import Login from '../pages/login'

export default class RootRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" component={Container} />
          <Route path="/login" component={Login} />
        </div>
      </HashRouter>
    );
  }
}
