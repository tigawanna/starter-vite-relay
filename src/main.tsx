import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  RelayEnvironmentProvider,
  loadQuery,
  graphql,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './relay/RelayEnviroment'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { HomeTabQuery } from './components/home/__generated__/HomeTabQuery.graphql';
import { mainRepoQuery } from './__generated__/mainRepoQuery.graphql';
import { mainVIEWERQuery } from './__generated__/mainViewerQuery.graphql';
import ErrorBoundary from './components/Shared/ErrorBoundary';
import { LoadingShimmer } from './components/Shared/LoadingShimmer';

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

export const MAINVIEWER = graphql`
# github graphql query to get more details  
  query mainVIEWERQuery{
   viewer{
    name
    email
    bio
   }
  }
`;


const preloadedQuery = loadQuery<mainVIEWERQuery>(RelayEnvironment, MAINVIEWER, {
  /* query variables */
});


const queryClient = new QueryClient(rq_config);
const { Suspense } = React;
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={<LoadingShimmer/>}>

  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} position={"top-left"} />
    <React.StrictMode>
      <ErrorBoundary>
        <App preloadedQuery={preloadedQuery} />
        </ErrorBoundary>
    </React.StrictMode>
  </QueryClientProvider>
    </Suspense>
  </RelayEnvironmentProvider>

);


