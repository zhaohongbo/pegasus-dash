import React from 'react'
import { connect } from 'react-redux'
import FilterLink from './filterLink'
import { addTodo, toggleTodo, delTodo } from '../../redux/actions'
import { VisibilityFilters } from '../../redux/actions'
import './index.css'


class todoList extends React.Component {
  submit = (e) => {
    e.preventDefault()
    if (!this.input.value.trim()) {
      return
    }
    this.props.addTodo(this.input.value)
    this.input.value = ''
  }

  render() {
    const todoList = this.props.todoList
    const setVisibility = this.props.setVisibility
    let todos = todoList
    if (setVisibility === VisibilityFilters.SHOW_COMPLETED) {
      todos = todoList.filter(t => t.completed)
    } else if (setVisibility === VisibilityFilters.SHOW_ACTIVE) {
      todos = todoList.filter(t => !t.completed)
    }
    return (
      <div className="todo-box">
        <div className="todo-innerBox">
          <div className="todo-tab">
            <FilterLink filter={VisibilityFilters.SHOW_ALL} name="全部任务"></FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} name="待办任务"></FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} name="已完成任务"></FilterLink>
          </div>
          <ul className="list-group">
            {
              todos.map((todo, id) =>
                <li className="todo-list_li" style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                  <input type="checkbox" className="check-box" checked={todo.completed} onClick={e => this.props.toggleTodo(id)} />
                  {todo.text}
                  <button className="todo-list_del" onClick={e => this.props.delTodo(id)}>删除</button>
                </li>)
            }
          </ul>
          <form onSubmit={this.submit} className="todo-add">
            <input placeholder="你想做点什么" ref={r => this.input = r} className="todo-input" />
            <button type="submit" className="todo-btn">添加任务</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todos,
    setVisibility: state.visibilityFilter,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: text => {
      dispatch(addTodo(text))
    },
    toggleTodo: id => {
      dispatch(toggleTodo(id))
    },
    delTodo: id => {
      dispatch(delTodo(id))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList);