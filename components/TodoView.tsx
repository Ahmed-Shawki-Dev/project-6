'use client'

import AddTodo from "./AddTodo"
import SortTodo from "./SortTodo"
import TodoTable from "./TodoTable"

type TTodo = {
  id: string
  title: string
  body: string | null
  createdAt: Date
  completed: boolean
}
const TodoView = ({ todos }: { todos: TTodo[] }) => {
  return (

  )
}

export default TodoView