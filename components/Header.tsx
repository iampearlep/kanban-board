import { PlusIcon } from "lucide-react"
import NewTask from "./NewTask"
const Header = () => {
  return (
    <div className="flex flex-col bg-[#ffffff] w-full mx-auto">
      <div className="flex flex-row justify-between items-center py-8 px-3 md:px-6">
        <h1 className="text-2xl font-bold">Tasks</h1>
       <NewTask />
      </div>
    </div>
  )
}

export default Header