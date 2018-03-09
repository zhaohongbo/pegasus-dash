import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
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
