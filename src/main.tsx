import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { ROOTVIEWER } from './App'
import './index.css'

import {
  RelayEnvironmentProvider,
  loadQuery,
  graphql,

} from 'react-relay/hooks';
import RelayEnvironment from './relay/RelayEnviroment'

import ErrorBoundary from './components/Shared/ErrorBoundary';
import { LoadingShimmer } from './components/Shared/LoadingShimmer';
import { useLocalStoreValues } from './store';
import { AppROOTVIEWERQuery } from './__generated__/AppROOTVIEWERQuery.graphql';

const rq_config = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
}

const extdata = useLocalStoreValues.getState()
console.log("local paw == ",extdata)

const rootQueryRef = loadQuery<AppROOTVIEWERQuery>(
  RelayEnvironment,
  ROOTVIEWER, {}
);
const { Suspense } = React;
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={<LoadingShimmer/>}>
      <React.StrictMode>
      
        <App rootQueryRef={rootQueryRef}/>
   
      </React.StrictMode>
     </Suspense>
  </RelayEnvironmentProvider>

);


