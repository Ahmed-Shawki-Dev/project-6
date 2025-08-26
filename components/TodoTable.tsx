'use client'
import DeleteTodo from './DeleteTodo'
import { Badge } from './ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import UpdateTodo from './UpdateTodo'

type TTodo = {
  id: string
  title: string
  body: string | null
  createdAt: Date
  completed: boolean
}

const TodoTable = ({ todos }: { todos: TTodo[] }) => {
  return (
    <Table className='w-full'>
      <TableHeader>
        <TableRow>
          <TableHead>id</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className='text-right'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo?.id}>
            <TableCell className='font-medium'>{todo?.id}</TableCell>
            <TableCell className={todo?.completed ? 'font-medium line-through' : 'font-medium'}>
              {todo?.title}
            </TableCell>
            <TableCell>
              {todo?.completed ? (
                <Badge>Completed</Badge>
              ) : (
                <Badge variant={'secondary'}>Uncompleted</Badge>
              )}
            </TableCell>
            <TableCell className='text-right space-x-2'>
              <UpdateTodo id={todo?.id} todo={todo} />
              <DeleteTodo id={todo?.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Todos</TableCell>
          <TableCell className='text-right'>{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default TodoTable
