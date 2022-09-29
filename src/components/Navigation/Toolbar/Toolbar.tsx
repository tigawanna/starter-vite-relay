import React from 'react'
import { GrHome } from "react-icons/gr";
import { TheIcon } from './../../Shared/TheIcon';
import {
  createHashHistory,
  Link,
  MakeGenerics,
  Outlet,
  ReactLocation,
  Router,
  useMatch,
} from '@tanstack/react-location';



interface ToolbarProps {

}

export const Toolbar: React.FC<ToolbarProps> = () => {

//console.log('user results === ',results)
return (
  <div className="w-[100%] bg-slate-200 dark:bg-slate-700 h-[60px] max-h-[50px] flex-center">
    <div className="flex items-center justify-between w-full text-lg font-bold ">
      <div className="w-fit p-1  flex-center bg-white">
        <Link to="/">
          <TheIcon Icon={GrHome} size={"25"} color={""} />
        </Link>
      </div>
      <div className="w-fit p-1  flex-center bg-white">
        <Link to="/test">
         test
        </Link>
      </div>





    </div>
  </div>
);
}
