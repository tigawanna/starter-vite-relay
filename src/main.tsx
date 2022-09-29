import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
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


const extdata = useLocalStoreValues.getState()
console.log("local paw == ",extdata)

const { Suspense } = React;
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={<LoadingShimmer/>}>
      <React.StrictMode>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
     </React.StrictMode>
     </Suspense>
  </RelayEnvironmentProvider>

);


