import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { pages } from '../utils/page'
import './middle.css'

export default class Middle extends React.Component {

  componentWillMount() {
    pages.map(this.getRedirect);
  }

  redirectData = [];

  getRedirect = (item) => {
    if (item && item.children) {
      if (item.children[0] && item.children[0].path) {
        this.redirectData.push({
          from: `${item.path}`,
          to: `${item.children[0].path}`,
        });
        item.children.forEach((children) => {
          this.getRedirect(children);
        });
      }
    }
  };

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