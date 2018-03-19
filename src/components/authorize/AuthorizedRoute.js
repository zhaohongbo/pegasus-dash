import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorize from './Authorize';

class AuthorizedRoute extends React.Component {
  render() {
    const {
      component: Component,
      render,
      authority,
      redirectPath,
      ...rest
    } = this.props;
    const noMatch = (<Route
      {...rest}
      render={() => <Redirect to={{ pathname: redirectPath }} />}
    />)
    return (
      <Authorize
        authority={authority}
        noMatch={noMatch}
      >
        <Route
          {...rest}
          render={props =>
            (Component ? <Component {...props} /> : render(props))
          }
        />
      </Authorize>
    );
  }
}

export default AuthorizedRoute;