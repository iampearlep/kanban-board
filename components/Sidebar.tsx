
import { ChevronDown, Home, Inbox, SquareCheck, FileText, Users, Calendar, Settings, CircleHelp } from 'lucide-react'
const Sidebar = () => {
  return (
  <div className='bg-white fixed top-0 left-0 h-screen w-72 border-r border-[#eaeaea]'>
  <div className='py-6 flex flex-col items-center gap-y-5'>
    <button className='flex flex-row gap-x-14 items-center  border border-gray-300 py-2 px-3 rounded-lg'>
    <div className='flex flex-row items-center gap-x-2'>
    <div className='px-2.5 py-1.5 text-xs font-semibold rounded-full bg-red-800 text-white'>
     A
    </div>
    <div>
        <p className='text-sm  font-semibold'>Aslanyan's Studio</p>
    </div>
    </div>
    <div>
    <ChevronDown className='w-4 h-4 text-gray-500' />
    </div>
    </button>
    <div className='grid grid-cols-1 items-center place-self-start w-full gap-y-1 px-3'>
    <div><p className=' text-xs px-4 text-gray-500'>Menu</p></div>
    <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
      <Home className='w-4 h-4 text-gray-500' />
        <p className='text-sm text-gray-500 font-semibold'>Dashboard</p>
        </div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
       <Inbox className='w-4 h-4 text-gray-500' />
        <p className='text-sm text-gray-500 font-semibold'>Inbox</p>
        </div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 bg-gray-100 rounded-lg transition-all ease-linear'>
        <SquareCheck className='w-4 h-4 text-gray-500' />
        <p className='text-sm text-gray-500 font-semibold'>Tasks</p>
        </div>
      
    </div>
    <div className='grid grid-cols-1 items-center place-self-start w-full gap-y-1 px-3'>
        <div><p className='text-xs px-4 text-gray-500'>Tools</p></div>
        
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
        <FileText className='w-4 h-4 text-gray-500' />
        <p className='text-sm text-gray-500 font-semibold'>Docs</p>
        </div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 rounded-lg transition-all ease-linear'>
       <Users className='w-4 h-4 text-gray-500' />
        <p className='text-sm text-gray-500 font-semibold'>Meetings</p>
        </div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
       <Calendar className='w-4 h-4 text-gray-500' />
       <p className='text-sm text-gray-500 font-semibold'>Calendar</p>
       </div>
    </div>
    <div className='grid grid-cols-1 items-center place-self-start w-full gap-y-1 px-3 border-b'>
    <div><p className=' text-xs px-4 text-gray-500'>Support</p></div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
        <Settings className='w-4 h-4 text-gray-500' />
        <p className='text-sm text-gray-500 font-semibold'>Settings</p>
        </div>
        <div className='flex flex-row items-center gap-x-2 py-3 px-5 hover:bg-gray-100 rounded-lg transition-all ease-linear'>
        <CircleHelp className='w-4 h-4 text-gray-500' />
        <p className='text-sm text-gray-500 font-semibold'>Help center</p>
        </div>
    </div>
  </div>
  </div>
  )
}

export default Sidebar