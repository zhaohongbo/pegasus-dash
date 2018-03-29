import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import './TeamPanel.css'

export class TeamPanel extends React.Component {

  createMember = (item) => {
    return (
      <Col span={12} key={`members-item-${item.id}`}>
        <Link to={item.link}>
          <Avatar src={item.logo} size="small" />
          <span className='member'>{item.title}</span>
        </Link>
      </Col>
    );
  }

  render() {
    const members = this.props.members;
    return (
      <Card
        bodyStyle={{ paddingTop: 12, paddingBottom: 12 }}
        bordered={false}
        title="团队"
      >
        <div className='members'>
          <Row gutter={48}>
            {
              members.map(this.createMember)
            }
          </Row>
        </div>
      </Card>
    );
  }
}