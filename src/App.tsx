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
 <div className='min-h-screen h-full  w-full'>
    <Router location={location} routes={routes}>
      <Toolbar/>
      <Outlet />
    </Router>
 </div>
);
}

export default App
