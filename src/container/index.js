import React from 'react';
import { connect } from 'react-redux'
import { setLogout } from '../redux/authorization'
import { Layout } from 'antd'
import Left from './left'
import Top from './top'
import Middle from './middle'
import Bottom from './bottom'
import { defaultPath } from '../utils/menu'
import 'antd/dist/antd.css'
import './index.css'

const { Sider, Header, Content, Footer } = Layout

class Container extends React.Component {
  state = {
    collapsed: false,
    initPathname: "/",
    defaultPathname: defaultPath(),
  }

  componentWillMount() {
    this.setState({
      initPathname: this.props.location.pathname
    });
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
    return (
      <Layout className="containAll" hasSider='true'>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
          <Left collapsed={this.state.collapsed} initPathname={this.state.initPathname} defaultPathname={this.state.defaultPathname} />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff' }}>
            <Top toggle={this.toggle}
              collapsed={this.state.collapsed}
              clear={this.props.logout}
              username={this.props.userInfo.username}
            />
          </Header>
          <Content className="content">
            <Middle defaultPathname={this.state.defaultPathname} />
          </Content>
          <Footer>
            <Bottom
              links={[{
                key: 'key',
                title: '首页',
                href: '',
                blankTarget: true,
              }, {
                key: 'github',
                title: '博客',
                href: '',
                blankTarget: true,
              }, {
                key: 'Ant Design',
                title: '帮助',
                href: '',
                blankTarget: true,
              }]}
            />
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