import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpledTodos extends Component {
  state = {initialList: initialTodosList}

  onDeleting = id => {
    const {initialList} = this.state
    const afterdelete = initialList.filter(eachtodo => {
      return eachtodo.id !== id
    })
    this.setState({initialList: afterdelete})
  }

  render() {
    const {initialList} = this.state
    return (
      <div className="main-container">
        <div className="internal-container">
          <h1 className="main-heading">Simple Todos</h1>
          {initialList.map(eachTodo => {
            return (
              <TodoItem
                key={eachTodo.id}
                tododetails={eachTodo}
                onDelete={this.onDeleting}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
export default SimpledTodos
