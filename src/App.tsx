import {
  createHashHistory,Outlet,
  ReactLocation,Router } from '@tanstack/react-location';
import React from 'react'
import { ReactLocationDevtools } from 'react-location-devtools';
import { Toolbar } from './components/Navigation/Toolbar/Toolbar';

import ErrorBoundary from './components/Shared/ErrorBoundary';
import { routes } from './routes';

interface AppProps {

}

const history = createHashHistory()
const location = new ReactLocation({ history })

const App: React.FC<AppProps> = ({}) => {



return (
  <div className='h-screen w-full dark:bg-slate-800 dark:text-white transition ease-linear delay-100 
  last:overflow-y-hidden'>
     <ErrorBoundary>
     <Router location={location} routes={routes}>

      <div className="fixed top-0 w-full z-30 h-[10%]">
      <Toolbar/>
      </div>
        
        <div className="mt-[55px] w-full h-[90%]">
          <Outlet />
        </div>
       

    </Router>
    </ErrorBoundary>
 </div>
);
}

export default App
