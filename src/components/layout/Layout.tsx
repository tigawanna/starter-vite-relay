import { MakeGenerics, useMatch } from '@tanstack/react-location';
import React from 'react'
import { RiOutletFill } from 'react-icons/ri';
import { PreloadedQuery } from 'react-relay';
import { routesROOTVIEWERQuery } from '../../__generated__/routesROOTVIEWERQuery.graphql';
import { Toolbar } from '../Navigation/Toolbar/Toolbar';

interface LayoutProps {

}

export const Layout: React.FC<LayoutProps> = ({}) => {
    type LocationGenerics = MakeGenerics<{
        LoaderData: {
            viewer: PreloadedQuery<routesROOTVIEWERQuery, {}>
        };
    }>;
const stuff =useMatch<LocationGenerics>()
// console.log("log === ",stuff.data.viewer)
return (
 <div className='w-full min-h-screen h-full flex flex-col justify-between
   dark:bg-slate-800 dark:text-white transition ease-linear delay-100 
   last:overflow-y-hidden'>
<div className="fixed top-0 w-full z-30 h-[10%]">
<Toolbar avatarUrl={""} />
      </div>
 layout
    </div>
);
}
