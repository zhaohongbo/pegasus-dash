import React from 'react'
import './bottom.css'

export default class Bottom extends React.Component {
  state = {
    timer: 0
  }

  tick = () => {
    this.setState({ timer: this.state.timer + 1 });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="bottom">
        <div><span className="me">© 2017 赵洪波</span>
          <span className="stay"> 已在页面停留了 <span className="time">{this.state.timer}</span> 秒</span></div>
      </div>
    );
  }
}