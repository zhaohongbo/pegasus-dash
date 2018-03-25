import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { allMenu } from '../utils/menu'
import { encodePath, decodePath } from '../utils/menu'

const SubMenu = Menu.SubMenu;

export default class Left extends React.Component {
  constructor(props) {
    super(props);
    let path = props.initPathname;
    if (path === '/') {
      path = props.defaultPathname;
    }
    const res = decodePath(path);
    this.state = {
      selectedKey: res.url,
      openKey: res.parent,
      mode: 'inline',
    };
  }

  handleClick = (e) => {
    this.setState({
      selectedKey: e.key,
    });
  }

  createMenu(menu) {
    if (menu.children && menu.children.length) {
      return (
        <SubMenu key={menu.url} title={<span><Icon type={menu.icon} /><span>{menu.name}</span></span>}>
          {menu.children.map(subMenu => (
            <Menu.Item key={subMenu.url}><Link to={encodePath(menu.url, subMenu.url)} replace={true}>{subMenu.name}</Link></Menu.Item>
          ))}
        </SubMenu>
      )
    }
    return (
      <Menu.Item key={menu.url}>
        <Link to={encodePath(menu.url)}>
          <Icon type={menu.icon} />
          <span className="nav-text">{menu.name}</span>
        </Link>
      </Menu.Item>
    );
  }

  render() {
    return (
      <div className="test">
        <a href="https://zhaohongbo.github.io">
          <Icon type="area-chart" className="github white" />
        </a>
        <span className="author white">Dashboard</span>
        <Menu theme="dark" onClick={this.handleClick}
          defaultOpenKeys={[this.state.openKey]}
          selectedKeys={[this.state.selectedKey]}
          className="menu" mode={this.state.mode} >
          {allMenu.map(this.createMenu)}
        </Menu>
      </div>
    );
  }
}