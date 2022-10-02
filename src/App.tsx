import {
  createHashHistory,Outlet,
  ReactLocation,Router } from '@tanstack/react-location';
import React from 'react'
import { ReactLocationDevtools } from 'react-location-devtools';
import { Toolbar } from './components/Navigation/Toolbar/Toolbar';

import ErrorBoundary from './components/Shared/ErrorBoundary';
import { routes } from './routes';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay/hooks';
import { AppROOTVIEWERQuery } from './__generated__/AppROOTVIEWERQuery.graphql';

interface AppProps {
  rootQueryRef: PreloadedQuery<AppROOTVIEWERQuery, {}>
}

const history = createHashHistory()
const location = new ReactLocation({ history })
const App: React.FC<AppProps> = ({rootQueryRef}) => {

const viewerData = usePreloadedQuery<AppROOTVIEWERQuery>(
    ROOTVIEWER,rootQueryRef
);
  console.log("use match ", viewerData)

return (
  <div className='h-screen w-full dark:bg-slate-800 dark:text-white transition ease-linear delay-100 
  last:overflow-y-hidden'>
     <ErrorBoundary>
     <Router location={location} routes={routes}>

      <div className="fixed top-0 w-full z-30 h-[10%]">
      <Toolbar avatarUrl={viewerData.viewer.avatarUrl}/>
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

export const ROOTVIEWER = graphql`
# github graphql query to get more details
  query AppROOTVIEWERQuery{
   viewer{
    id
    name
    login
    email
    bio
    avatarUrl
    company
    twitterUsername
    createdAt
    isFollowingViewer
    viewerIsFollowing
    isViewer
    location
    url

    followers(first: 1) {
      totalCount
      nodes {
        id
      }
    }
    following(first: 1) {
      totalCount
      nodes {
        id
      }
    }
    
  repositories(first:1){
   totalCount
    nodes{
      id
    }
    }
   }
  }
`;
