import { auth } from '@clerk/nextjs/server'
import { getTodosAction } from '../actions/todo.actions'
import AddTodo from '../components/AddTodo'
import TodoTable from '../components/TodoTable'
import { SignIn } from '@clerk/nextjs'

export default async function Page() {
  const { userId } = await auth()

  if (!userId) {
    return (
      <div className='flex w-full flex-1 items-center justify-center p-6 md:p-10'>
        <SignIn />
      </div>
    )
  }

  const todos = await getTodosAction(userId)

  return (
    <div className='container m-auto mt-5 space-y-5'>
      <div className='flex space-x-2 justify-end'>
        <AddTodo userId={userId} />
      </div>
      <TodoTable todos={todos} />
    </div>
  )
}
