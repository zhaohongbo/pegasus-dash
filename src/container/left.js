import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { allMenu } from '../utils/menu'

const SubMenu = Menu.SubMenu;

const defaultMenu = "maps"

export default class Left extends React.Component {
  state = {
    current: defaultMenu,
    mode: 'inline',  // 水平垂直展现
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  createMenu(subMenu) {
    if (subMenu.children && subMenu.children.length) {
      return (
        <SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
          {subMenu.children.map(menu => (
            <Menu.Item key={menu.url}><Link to={`/${menu.url}`} replace={true}>{menu.name}</Link></Menu.Item>
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
        <span className={authorName}>Dashboard</span>
        <Menu theme="dark" onClick={this.handleClick}
          defaultOpenKeys={['visualization']}
          selectedKeys={[this.state.current]}
          className="menu" mode={this.state.mode} >
          {allMenu.map(this.createMenu)}
        </Menu>
      </div>
    );
  }
}