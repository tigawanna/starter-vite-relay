import React from 'react'
import { RiOutletFill } from 'react-icons/ri';
import { Toolbar } from '../Navigation/Toolbar/Toolbar';

interface LayoutProps {
Outlet: JSX.Element | null
}

export const Layout: React.FC<LayoutProps> = ({Outlet}) => {
    console.log(Outlet?.props)
   const props = "cum"
return (
    <div className='w-full min-h-screen h-full flex flex-col justify-between
   dark:bg-slate-800 dark:text-white transition ease-linear delay-100 
   last:overflow-y-hidden'>
    <div className="fixed top-0 w-full z-30 h-[10%]">
      <Toolbar avatarUrl={""} />
      </div>
      <div className="mt-[55px] w-full h-[90%]">
            {Outlet ? React.cloneElement(Outlet, {props},null):null}
     </div>
    </div>
);
}
