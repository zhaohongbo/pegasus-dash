import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { Form, Input, Button, message } from 'antd';
// import { login } from '../../redux/actions'
import { setLogin } from '../../redux/authorization'
import { loginService } from '../../services/authService'

import './index.css'

const FormItem = Form.Item;

class LoginPage extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    loginService(this.props.form.getFieldsValue())
    // .then(this.handleLoginResponse)
    .catch(this.handleLoginError);
  }

  handleLoginError = (e) => {
    message.error(e.message);
  }

  handleLoginResponse = (response) => {
    let nickname = response.userInfo.nickname
    let info = {username: nickname};
    this.props.login(info)
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
          <p>Welcome to the dashboard</p>
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
              <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
            </Form>
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
    login: userInfo => {
      dispatch(setLogin(userInfo))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);