import React from 'react'

interface LoadingProps {
size:number
}

export const Loading: React.FC<LoadingProps> = ({size}) => {

return (
  <div className="w-full flex-center">
  <div className="w-[50%]  flex-center h-10">
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className="animate-spin">
      <div className="h-full w-full border-4 border-t-slate-800
       border-b-slate-700 rounded-[50%]">
      </div>
    </div>
  </div>
  </div>
);
}
