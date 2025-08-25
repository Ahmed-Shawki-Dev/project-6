'use client'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Loader, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { deleteTodosAction } from '../actions/todo.actions'
import { Button } from './ui/button'

const DeleteTodo = ({ id }: { id: string }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size='icon' variant='destructive'>
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your todo.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            variant='destructive'
            onClick={async () => {
              setLoading(true)
              await deleteTodosAction(id)
              setLoading(false)
            }}
          >
            {loading ? <Loader className='animate-spin' /> : 'Continue'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteTodo
