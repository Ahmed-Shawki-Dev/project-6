import { PlusCircleIcon } from 'lucide-react'
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

export default function Home() {
  return (
    <>
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
