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
import { LoadingShimmer } from './components/Shared/LoadingShimmer';
import { AppROOTVIEWERQuery } from './__generated__/AppROOTVIEWERQuery.graphql';
import ErrorBoundary from './components/Shared/ErrorBoundary';
import { useCheckToken } from './utils/useCheckToken';
import { Login } from './components/auth/Login';
import { QueryClient, QueryClientProvider } from "react-query";

interface MainViewProps {
  isLoggedIn: boolean
}

export const MainView: React.FC<MainViewProps> = ({ isLoggedIn }) => {
const {error,viewer,loading} = useCheckToken()

  if (loading){
    return <LoadingShimmer/>
  }
  if (viewer && !error) {
    return <AuthedView />
  }
  return <NotAuthedView />
}

const { Suspense } = React;
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
<MainView isLoggedIn={false}/>
);






interface mainProps {

}

const rootQueryRef= loadQuery<AppROOTVIEWERQuery>(
  RelayEnvironment,
  ROOTVIEWER, {}
);

export const AuthedView: React.FC<mainProps> = ({ }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={<LoadingShimmer />}>
          <React.StrictMode>
            <App rootQueryRef={rootQueryRef}/>
            </React.StrictMode>
        </Suspense>
      </RelayEnvironmentProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
export const NotAuthedView: React.FC<mainProps> = ({ }) => {
  return (
    <div className='w-full minh-screen h-full'>
 <    Login/>
    </div>
  );
}
