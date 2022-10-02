
import { graphql, loadQuery } from 'react-relay/hooks';
import App from './App';
import { Home } from './components/home/Home';
import { Test } from './components/test/Test';
import { Login } from './components/auth/Login';
import RelayEnvironment from './relay/RelayEnviroment'
import { routesROOTVIEWERQuery } from './__generated__/routesROOTVIEWERQuery.graphql';
import { DefaultGenerics, Route } from '@tanstack/react-location';


// export const ROOTVIEWER = graphql`
// # github graphql query to get more details
//   query routesROOTVIEWERQuery{
//    viewer{
//    ...ProfileInfo_user
//    }
//   }
// `;



// const RootQueryRef = loadQuery<routesROOTVIEWERQuery>(
//   RelayEnvironment,
//   ROOTVIEWER,{}
// );




// export default makeRouteConfig(
//   <Route path="/"
//     Component={App}
//     query={MAINVIEWER}>
//     <Route Component={Home} />
//     <Route path="test" Component={Test} />

//     <Redirect from="baz" to="/foo" />
//   </Route>,
// )


export const routes: Route<DefaultGenerics>[] = [
  { path: "/", 
  element: <Home/>,
    // loader: () => ({
    //   viewer: loadQuery<routesROOTVIEWERQuery>(RelayEnvironment, ROOTVIEWER, {})
    // })
   },
  {path: "test", element: <Test/>},
  { path: "login", element: <Login/> },
]
