import React from 'react';
import { Spin } from 'antd';
import { Redirect } from 'react-router-dom';


export function checkAuthStatus(WrappedComponent, curStatus, targetStatus, redirectPath) {
  return class extends React.Component {
    render() {
      if (curStatus === null) {
        return (
          <div
            style={{
              width: '100%',
              height: '100%',
              margin: 'auto',
              paddingTop: 50,
              textAlign: 'center',
            }}
          >
            <Spin size="large" />
          </div>);
      } else if (curStatus === targetStatus) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Redirect to={redirectPath} />;
      }
    };
  }
}