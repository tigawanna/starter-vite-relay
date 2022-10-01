import React from 'react'

interface ConsentProps {
setOpen: React.Dispatch<React.SetStateAction<boolean>>
message:string
action:any
}

export const Consent: React.FC<ConsentProps> = ({message,action,setOpen}) => {


return (
  <div className='w-full flex-center h-full p-2 fixed top-[0%] bottom-[0%] right-[0%] left-[0%]
   bg-slate-900 bg-opacity-40 dark:text-white z-50'>
    <div className='bg-slate-200 dark:bg-slate-600 shadow-lg shadow-slate-800 
      p-2 h-[30%] sm:h-[30%] w-[90%] sm:w-[40%] rounded-lg z-50'>
   <div className='h-full w-full flex flex-col'>
   <div className='h-full w-full flex flex-center text-3xl font-medium'>{message}</div>
   <div className='h-full w-full flex justify-evenly items-center '>
    <button
      onClick={()=>{action();setOpen(false)}}
            className='dark:bg-slate-500 p-5 w-[30%] rounded-md hover:bg-yellow-700 text-2xl
   font-bold border border-black'
    >YES</button>
    
    <button
      onClick={()=>setOpen(false)}  
            className='dark:bg-slate-500 p-5 w-[30%] rounded-md hover:bg-yellow-700 text-2xl
   font-bold border border-black text-red-500'
    >NO</button> 
 
   </div>
    </div>
    </div>
 </div>
);
}
