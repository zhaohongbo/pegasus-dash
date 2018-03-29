import React from 'react';
import { Card, Avatar, List } from 'antd';
import './ActivityList.css'

export class ActivityList extends React.Component {

  createActivity = (item) => {
    const events = item.template.split(/@\{([^{}]*)\}/gi).map((key) => {
      if (item[key]) {
        return <a href={item[key].link} key={item[key].name}>{item[key].name}</a>;
      }
      return key;
    });
    return (
      <List.Item key={item.id}>
        <List.Item.Meta
          avatar={<Avatar src={item.user.avatar} />}
          title={
            <span>
              <a className='username'>{item.user.name}</a>
              &nbsp;
                <span className='event'>{events}</span>
            </span>
          }
          description={
            <span className='datetime' title={item.updatedAt}>
            </span>
          }
        />
      </List.Item>
    );
  }

  render() {
    const activities = this.props.activities;
    return (
      <Card
        bodyStyle={{ padding: 0 }}
        bordered={false}
        className='activeCard'
        title="动态"
      >
        <List size="large">
          <div className='activitiesList'>
            {
              activities.map(this.createActivity)
            }
          </div>
        </List>
      </Card>
    );
  }
}