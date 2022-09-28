import { Link } from 'found';
import React, { ReactPropTypes } from 'react'
import { ReactNode } from 'react';

interface AppProps {
  children: ReactNode
}

const App: React.FC<AppProps> = ({children}) => {
return (
  <div className='w-full h-screen'>
   {children}
  </div>
);
}

export default App

export function LinkItem(props:any) {
  return (
    <li>
      <Link {...props} activeStyle={{ fontWeight: 'bold' }} />
    </li>
  );
}
