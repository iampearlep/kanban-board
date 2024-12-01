import Image from "next/image"
import FileIcon from "@/public/file-download-02.svg"
import { PlusIcon } from "lucide-react"
const Header = () => {
  return (
    <div className="flex flex-col bg-[#ffffff] w-full mx-auto">
      <div className="flex flex-row justify-between items-center py-8 px-3 md:px-6">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <button className="bg-gray-100 text-gray-500 flex flex-row gap-x-2 justify-center items-center px-2 py-2 text-xs border rounded-lg">
            <PlusIcon className="w-4 h-4 text-gray-500" />
            Add new task
            </button>
      </div>
    </div>
  )
}

export default Header