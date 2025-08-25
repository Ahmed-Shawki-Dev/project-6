import { getTodosAction } from '../actions/todo.actions'
import AddTodo from '../components/AddTodo'
import TodoTable from '../components/TodoTable'

export default async function Page() {
  const todos = await getTodosAction()
  return (
    <div className='container m-auto mt-5'>
      <div>
      <AddTodo />

      </div>
      <TodoTable todos={todos} />
    </div>
  )
}
