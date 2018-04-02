import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import './top.css'

const SubMenu = Menu.SubMenu

export default class Top extends React.Component {

  clear = (item) => {
    if (item.key === 'logOut') {
      this.props.clear()
    }
  }

  toggle = () => {
    this.props.toggle();
    setTimeout(this.triggerResizeEvent, 300);
  }

  triggerResizeEvent = ()=> {
    console.log("trigger")
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }

  render() {
    return (
      <div>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <Menu mode="horizontal" className="logOut" onClick={this.clear}>
          <SubMenu title={<span><Icon type="user" />{this.props.username}</span>} >
            <Menu.Item key="logOut"><Link to="/login" >退出</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}