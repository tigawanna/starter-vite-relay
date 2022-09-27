import { useState } from 'react'
import { useQuery } from 'react-query';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import { ProtectedRoute } from './components/auth/PrivateRoutes';
import { Home } from './components/home/Home';
import { Test } from './components/test/Test';
import { Toolbar } from './components/toolbar/Toolbar';

import {
  PreloadedQuery,
  RelayEnvironmentProvider,
  usePreloadedQuery,

} from 'react-relay/hooks';
import RelayEnvironment from './relay/RelayEnviroment';
import React from 'react';
import { OperationType } from 'relay-runtime';

import { HomeTabQuery } from './components/home/__generated__/HomeTabQuery.graphql';
import { mainRepoQuery } from './__generated__/mainRepoQuery.graphql';
import { MAINVIEWER } from './main';
import { mainVIEWERQuery } from './__generated__/mainViewerQuery.graphql';

const var_token = { token: import.meta.env.VITE_TOKEN };
interface AppTypes{

  preloadedQuery: PreloadedQuery<mainVIEWERQuery, {}>
}
function App({preloadedQuery}:AppTypes) {

const [token, setToken] = useState<string>(var_token.token);
const { Suspense } = React;

const data = usePreloadedQuery<mainVIEWERQuery>(MAINVIEWER,preloadedQuery);


return (
    <div
     className="h-screen w-screen   scroll-bar flex-col-center 
    dark-styles transition duration-500 overflow-x-hidden "
    >
    <BrowserRouter >

        <div className="fixed top-[0px] w-[100%] z-40">
          <Toolbar />
        </div>


        <div className="w-full h-full mt-12 ">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute >
                  <Home token={token} data={data}/>
                </ProtectedRoute>
              }
            />

            <Route path="/test" element={<Test token={token} />} />
          </Routes>
        </div>

      </BrowserRouter>
      

    </div>
  );
}

export default App
