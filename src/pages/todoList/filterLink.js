import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../redux/actions'
import './index.css'

class filterLink extends React.Component {
  onClick = () => {
    this.props.setVisibilityFilter(this.props.filter)
  }

  render() {
    const { name,filter } = this.props
    const active = this.props.visibilityFilter === filter
    return (
      <div className="todo-tab_item">
        <a style={{ color: active? '#f01414' : '#4d555d' }} onClick={this.onClick}>{name}</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter: filter => {
      dispatch(setVisibilityFilter(filter))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(filterLink);