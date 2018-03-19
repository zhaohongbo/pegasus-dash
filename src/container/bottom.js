import React from 'react'
import './bottom.css'

export default class Bottom extends React.Component {
  // state = {
  //   timer: 0
  // }

  // tick = () => {
  //   this.setState({ timer: this.state.timer + 1 });
  // }

  // componentDidMount() {
  //   this.interval = setInterval(this.tick, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    return (<div className="bottom">
      {
        this.props.links && (
          <div className="links">
            {this.props.links.map(link => (
              <a
                key={link.key}
                target={link.blankTarget ? '_blank' : '_self'}
                href={link.href}
              >
                {link.title}
              </a>
            ))}
          </div>
        )
      }
      {this.props.copyright && <div className="copyright">{this.props.copyright}</div>}
    </div>
    );
  }
}