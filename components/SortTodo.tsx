'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SortAsc } from 'lucide-react'
import { useState } from 'react'

const SortTodo = () => {
  const [position, setPosition] = useState('asc')
  console.log(position)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'><SortAsc/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Sort Todos</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value='asc'>Asc</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='desc'>Desc</DropdownMenuRadioItem>

        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SortTodo
