export const dynamic = 'force-dynamic'
import { PlusCircleIcon } from 'lucide-react'
import { getTodosAction } from '../actions/todo.actions'
import { Button } from '../components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

export default async function Home() {
  const todos = await getTodosAction()
  console.log(todos)
  return (
    <>
      <ul className='list-inside list-decimal space-y-5'>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button>
              <PlusCircleIcon />
              New Task
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className='grid gap-4'>
              <div className='grid gap-3'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' name='name' defaultValue='Pedro Duarte' />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='username'>Username</Label>
                <Input id='username' name='username' defaultValue='@peduarte' />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DialogClose>
              <Button type='submit'>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  )
}
