import { BrowserProtocol, queryMiddleware } from 'farce';
import './index.css'
import {
  createFarceRouter,
  createRender,

} from 'found';
import { Resolver } from 'found-relay';
import ReactDOM  from 'react-dom/client';
import environment from './relay/RelayEnviroment'
import { Suspense } from 'react';
import ErrorBoundary from './components/Shared/ErrorBoundary';
import { Loading } from './components/Shared/Loading';
import  router from './routes'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';




const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig:router,
  render: createRender({}),
});


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div className='min-h-screen w-full flex-center'>
 <ErrorBoundary>
  <Suspense fallback={<Loading size={50}/>}>
  {/* @ts-ignore */}
   <Router resolver={new Resolver(environment)} />
  </Suspense>
  </ErrorBoundary>   
  </div>
);
