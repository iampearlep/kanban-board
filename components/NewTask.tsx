"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { useTaskStore } from "@/lib/store"
import { PlusIcon } from "lucide-react"
const NewTask = () => {
    const addTask = useTaskStore(state => state.addTask)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const formData = new FormData(form)
        const {title, description} = Object.fromEntries(formData)

        if (typeof title !== 'string' || typeof description !== 'string') return

        addTask(title, description)
    }
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button className="bg-gray-100 text-gray-500 flex flex-row gap-x-1 justify-center items-center px-2 py-2 text-xs hover:text-white hover:bg-gray-700/50"> <PlusIcon className="w-4 h-4 text-gray-400 hover:text-white" />Add new task</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] text-gray-500 bg-gray-100">
      <DialogHeader>
        <DialogTitle>Add new task</DialogTitle>
        <DialogDescription className="text-gray-500">
        What do you want to get done today?
        </DialogDescription>
      </DialogHeader>
      <form id="todo-form" className="grid gap-4 py-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 items-center gap-4">
          <Input name="title" id="title" placeholder="Title" className="col-span-4 text-gray-500 placeholder:text-gray-500" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
        <Textarea
              id='description'
              name='description'
              placeholder='Description...'
              className='col-span-4 text-gray-500 placeholder:text-gray-500'
            />
        </div>
      </form>
      <DialogFooter>
       <DialogTrigger asChild>
       <Button type="submit" form='todo-form'  className="bg-gray-700/50 hover:bg-gray-500 hover:outline">Add</Button>
       </DialogTrigger>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default NewTask