import React, { Suspense } from 'react'
import { Onerepo } from '../repo/onerepo';
import { mainVIEWERQuery$data } from '../../__generated__/mainViewerQuery.graphql';
import { LoadingShimmer } from '../Shared/LoadingShimmer';


interface HomeProps {
// token:string
// data: mainVIEWERQuery$data

}

export const Home: React.FC<HomeProps> = ({}) => {
// console.log("data == ", data)


return (
<div className='w-full min-h-screen h-full flex-center-col bg-red-600'>
    <div className='text-7xl font-bold flex-center bg-blue-900'>
      HOME COMPONENT
    </div>

  </div>
);
}



