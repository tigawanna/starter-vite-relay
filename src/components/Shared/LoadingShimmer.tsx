import React from 'react'
import { Loading } from './Loading';

interface LoadingShimmerProps {

}

export const LoadingShimmer: React.FC<LoadingShimmerProps> = ({}) => {
return (
 <div className='w-full h-screen'>
        <div className='w-full h-full placeholder:animate-pulse p-20 bg-slate-200'>
              <Loading size={50}/>
        </div>

 </div>
);
}
