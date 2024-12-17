// Write your code here
import './index.css'

const TodoItem = props => {
  const {tododetails, onDelete} = props
  const {id, title} = tododetails

  const deleting = () => {
    onDelete(id)
  }
  return (
    <li className="each-li">
      <p>{title}</p>
      <button className="del-btn" onClick={deleting}>
        DELETE
      </button>
    </li>
  )
}
export default TodoItem
