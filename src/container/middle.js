import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { allMenu, encodePath } from '../utils/menu'
import './middle.css'

export default class Middle extends React.Component {

  createRouter() {
    let router = [];
    for (let menu of allMenu) {
      if (menu.children && menu.children.length) {
        for (let subMenu of menu.children ) {
          router.push(<Route key={subMenu.url} path={encodePath(menu.url, subMenu.url)} component={subMenu.component} />)
        }
      } else {
        router.push(<Route key={menu.url} path={encodePath(menu.url)} component={menu.component} />);
      }
    }
    return router;
  }

  render() {
    return (
      <Switch>
        {
          this.createRouter()
        }
        <Redirect to={this.props.defaultPathname} />
      </Switch>
    );
  }
}