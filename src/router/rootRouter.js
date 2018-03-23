import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Container from '../container'
import Login from '../container/login'
import { getUserInfo } from '../services/authService'
import { message } from 'antd'
// import AuthorizedRoute from '../components/authorize/AuthorizedRoute'
import { connect } from 'react-redux'
import { checkAuthStatus } from '../components/authorize/Authorize'
import { LOGIN_STATUS, LOGOUT_STATUS, setAuth, setLogout } from '../redux/authorization'

class RootRouter extends React.Component {

  componentWillMount() {
    getUserInfo().then((response) => {
      this.props.auth(response);
    }).catch((e) => {
      this.props.logout();
      message.error(e.message);
    });
  }

  render() {
    const LoginComponent = checkAuthStatus(Login, this.props.curStatus, LOGOUT_STATUS, "/");
    const HomeComponent = checkAuthStatus(Container, this.props.curStatus, LOGIN_STATUS, "/login");

    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/" component={HomeComponent} />
        </Switch>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    curStatus: state.userInfo.login,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (userInfo) => {
      dispatch(setAuth(userInfo))
    },
    logout: () => {
      dispatch(setLogout())
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);