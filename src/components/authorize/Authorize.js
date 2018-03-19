import React from 'react';
import PromiseRender from '../PromiseRender'

class Authorize extends React.Component {
  isPromise(obj) {
    return (
      !!obj &&
      (typeof obj === 'object' || typeof obj === 'function') &&
      typeof obj.then === 'function'
    );
  }

  checkPermissions(authority, successComponent, failedComponent){
    // Promise 处理
    if (this.isPromise(authority)) {
      return <PromiseRender ok={successComponent} error={failedComponent} promise={authority} />;
    }

    // Function 处理
    if (typeof authority === 'function') {
      try {
        const bool = authority();
        if (bool) {
          return successComponent;
        }
        return failedComponent;
      } catch (error) {
        throw error;
      }
    }
    throw new Error('unsupported parameters');
  };

  render() {
    const { children, authority, noMatch = null } = this.props;
    const childrenRender = typeof children === 'undefined' ? null : children;
    return this.checkPermissions(authority, childrenRender, noMatch);
  }
}

export default Authorize;
