import {
  createHashHistory,Outlet,
  ReactLocation,Router, useMatch } from '@tanstack/react-location';
import React from 'react'

import { Toolbar } from './components/Navigation/Toolbar/Toolbar';
import ErrorBoundary from './components/Shared/ErrorBoundary';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay/hooks';
import { AppROOTVIEWERQuery } from './__generated__/AppROOTVIEWERQuery.graphql';
import { Home } from './components/home/Home';
import { Test } from './components/test/Test';
import { useFragment } from 'react-relay';
import { App_user$data } from './__generated__/App_user.graphql';



interface AppProps {
  rootQueryRef: PreloadedQuery<AppROOTVIEWERQuery, { }>
}


const history = createHashHistory()
const location = new ReactLocation({ history })

const App: React.FC<AppProps> = ({ rootQueryRef }) => {

const viewerData = usePreloadedQuery<AppROOTVIEWERQuery>(ROOTVIEWER, rootQueryRef);
console.log("viewer data ", viewerData)
const data = useFragment(AppVIEWERfragmant, viewerData.viewer);
console.log("query data App frag ",data)
const response = data as App_user$data


return (
  <div className='w-full min-h-screen h-full flex flex-col justify-between
   dark:bg-slate-800 dark:text-white transition ease-linear delay-100 
  last:overflow-y-hidden'>
     <ErrorBoundary>
     <Router location={location} 
      routes={[
        { path: "/", element: <Home viewerData={viewerData}/> },
        { path: "test", element: <Test /> },
      ]}
     >

      <div className="fixed top-0 w-full z-30 h-[10%]">
      <Toolbar avatarUrl={""} />
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

export const AppVIEWERfragmant = graphql`
# github graphql query to get more details
  fragment App_user on User{
    avatarUrl
    }
`;

export const ROOTVIEWER = graphql`
# github graphql query to get more details
  query AppROOTVIEWERQuery{
   viewer{
    ...App_user
    ...Home_user
    ...ProfileInfo_user
    }
  }
`;



