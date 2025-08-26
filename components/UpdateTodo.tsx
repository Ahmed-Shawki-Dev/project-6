'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader, Pen } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { updateTodosAction } from '../actions/todo.actions'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form'
import { Textarea } from '../components/ui/textarea'
import { FormSchema } from '../validation'
import { Label } from './ui/label'
import { Switch } from './ui/switch'
type TTodo = {
  id: string
  title: string
  body: string | null
  createdAt: Date
  completed: boolean
}

const UpdateTodo = ({ id, todo }: { id: string; todo: TTodo }) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { title: todo.title, body: todo?.body ?? '', complete: todo.completed },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true)
    console.log('Data Updated:', data)
    await updateTodosAction(id, data)
    setLoading(false)
    setOpen(false)
    form.reset()
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={'icon'}>
          <Pen />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Update Todo</DialogTitle>
          <DialogDescription>
            Make changes to your todos here. Click Update when you are done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder='title' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='body'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Body</FormLabel>
                  <FormControl>
                    <Textarea placeholder='description' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='complete'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='flex items-center space-x-2'>
                      <Switch
                        id='complete-mode'
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Label htmlFor='complete-mode'>Completed</Label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  variant='outline'
                  onClick={() => {
                    form.reset()
                  }}
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button type='submit' disabled={loading}>
                {loading ? <Loader /> : 'Update'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default UpdateTodo
