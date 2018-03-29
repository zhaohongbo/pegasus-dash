import React from 'react';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import './ProjectPanel.css'

export class ProjectPanel extends React.Component {

createPanel = (item) => {
  return (
    <Card.Grid className='projectGrid' key={item.id}>
      <Card bodyStyle={{ padding: 0 }} bordered={false}>
        <Card.Meta
          title={(
            <div className='cardTitle'>
              <Avatar size="small" src={item.logo} />
              <Link to={item.href}>{item.title}</Link>
            </div>
          )}
          description={item.description}
        />
        <div className='projectItemContent'>
          <Link to={item.memberLink}>{item.member || ''}</Link>
          {item.updatedAt && (
            <span className='datetime' title={item.updatedAt}>
            </span>
          )}
        </div>
      </Card>
    </Card.Grid>
  )
}

  render() {
    const projects = this.props.projects;
    return (
      <Card
        className='projectList'
        style={{ marginBottom: 24 }}
        title="进行中的项目"
        bordered={false}
        extra={<Link to="/">全部项目</Link>}
        // loading={projectLoading}
        bodyStyle={{ padding: 0 }}
      >
        {
          projects.map(this.createPanel)
        }
      </Card>
    );
  }
}