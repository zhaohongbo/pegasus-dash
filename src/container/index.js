import React from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { setLogout } from '../redux/authorization'
import { Layout } from 'antd'
import Left from './left'
import Top from './top'
import Middle from './middle'
import Bottom from './bottom'
import 'antd/dist/antd.css'
import './index.css'

const { Sider, Header, Content, Footer } = Layout

class Container extends React.Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical',
    });
  }

  clear = () => {
    this.setState({
      current: 'index',
    });
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    if (!this.props.userInfo.login && this.props.history.location.pathname !== '/login') {
      return (
        <Redirect to='/login' />
      );
    }
    return (
      <Layout className="containAll">
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
          <Left collapsed={this.state.collapsed} />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff' }}>
            <Top toggle={this.toggle} collapsed={this.state.collapsed} clear={this.props.logout} />
          </Header>
          <Content className="content">
            <Middle />
          </Content>
          <Footer>
            <Bottom />
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(setLogout())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);