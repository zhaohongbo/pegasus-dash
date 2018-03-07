import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon, Switch } from 'antd'
import { allMenu } from '../utils/menu'

const SubMenu = Menu.SubMenu;

export default class Left extends React.Component {
  state = {
    theme: 'dark',
    current: 'index',
    mode: 'inline',  // 水平垂直展现
  }

  componentDidMount() {
    this.handleClick([], 'index');
  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }

  handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    });
  }

  createMenu(subMenu) {
    if (subMenu.children && subMenu.children.length) {
      return (
        <SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
          {subMenu.children.map(menu => (
            <Menu.Item key={menu.url}><Link to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
          ))}
        </SubMenu>
      )
    }
    return (
      <Menu.Item key={subMenu.url}>
        <Link to={`/${subMenu.url}`}>
          <Icon type={subMenu.icon} />
          <span className="nav-text">{subMenu.name}</span>
        </Link>
      </Menu.Item>
    );
  }

  render() {
    let githubName = this.state.theme === 'light' ? "github" : "github white"
    let authorName = this.state.theme === 'light' ? "author" : "author white"
    return (
      <div className="test">
        <a href="https://zhaohongbo.github.io">
          <Icon type="github" className={githubName} />
        </a>
        <span className={authorName}> Eric </span>
        <Menu theme={this.state.theme} onClick={this.handleClick} defaultOpenKeys={['']}
          selectedKeys={[this.state.current]} className="menu" mode={this.state.mode} >
          {allMenu.map(this.createMenu)}
        </Menu>
        <div className="switch" >
          <Switch checked={this.state.theme === 'dark'} onChange={this.changeTheme}
            checkedChildren="Dark" unCheckedChildren="Light" />
        </div>
      </div>
    );
  }
}