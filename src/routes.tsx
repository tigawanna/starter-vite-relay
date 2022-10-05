import { Home } from './components/home/Home';
import { Test } from './components/test/Test';
import { Login } from './components/auth/Login';
import { DefaultGenerics, Route } from '@tanstack/react-location';
import { graphql } from 'relay-runtime';
import { loadQuery } from 'react-relay';
import { routesROOTVIEWERQuery } from './__generated__/routesROOTVIEWERQuery.graphql';
import RelayEnvironment from './relay/RelayEnviroment'
import { Layout } from './components/layout/Layout';
import { Protected } from './components/auth/Protected';

export const ROOTVIEWER = graphql`
# github graphql query to get more details
  query routesROOTVIEWERQuery{
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


const RootQueryRef = loadQuery<routesROOTVIEWERQuery>(
  RelayEnvironment,
  ROOTVIEWER,{}
);




// export default makeRouteConfig(
//   <Route path="/"
//     Component={App}
//     query={MAINVIEWER}>
//     <Route Component={Home} />
//     <Route path="test" Component={Test} />

//     <Redirect from="baz" to="/foo" />
//   </Route>,
// )


export const routes_: Route<DefaultGenerics>[] = [
  
  
//   {

//     // loader: async() => ({
//     //   viewer: RootQueryRef
//     // }),
//     children:[  
//   {path: "/",element: <Home />},
//   { path: "test", element: <Test /> },
//  ]},
//   { path: "login", element: <Login /> }

]
