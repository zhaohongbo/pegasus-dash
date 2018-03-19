import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { Form, Input, Button, Checkbox, Spin, message } from 'antd';
// import { login } from '../../redux/actions'
import { setLogin } from '../redux/authorization'
import { loginService } from '../services/authService'
import Bottom from './bottom'

import './login.css'

const FormItem = Form.Item;

const links = [{
  key: 'help',
  title: '首页',
  href: '',
}, {
  key: 'privacy',
  title: '博客',
  href: '',
}, {
  key: 'terms',
  title: '帮助',
  href: '',
}];

class LoginPage extends React.Component {
  state = { loading: false }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    loginService(this.props.form.getFieldsValue())
      .then(this.handleLoginResponse)
      .catch(this.handleLoginError);
  }

  handleLoginError = (e) => {
    this.setState({ loading: false });
    message.error(e.message);
  }

  handleLoginResponse = (response) => {
    this.setState({ loading: false });
    this.props.login(response.token, response.userInfo);
  }

  componentDidMount() {
    if (this.props.userInfo.login) {
      this.props.history.push('/index');
    }
  }

  render() {
    if (this.props.userInfo.login) {
      return (
        <Redirect to='/index' />
      )
    }
    const { getFieldDecorator } = this.props.form
    return (
      <div className="loginpagewrap">
        <div className="box">
          <p>Pegasus Dashboard</p>
          <div className="loginWrap">
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名' }],
                })(
                  <Input placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }],
                })(
                  <Input type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
              </FormItem>
              <Spin spinning={this.state.loading}>
                <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
              </Spin>
            </Form>
            <Bottom links={links} />
          </div>
        </div>
      </div>
    );
  }
}

let Login = Form.create()(LoginPage);

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (token, userInfo) => {
      dispatch(setLogin(token, userInfo))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);