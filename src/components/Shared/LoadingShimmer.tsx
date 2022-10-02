import React from 'react'

interface LoadingShimmerProps {

}

export const LoadingShimmer: React.FC<LoadingShimmerProps> = ({}) => {
return (
 <div className='w-full h-screen'>
        <div className='w-full h-full placeholder:animate-pulse p-20 bg-slate-200'>
        </div>

 </div>
);
}
