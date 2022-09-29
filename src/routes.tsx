
import { graphql } from 'react-relay/hooks';
import App from './App';
import { Home } from './components/home/Home';
import { Test } from './components/test/Test';
import { Login } from './components/auth/Login';


// export const MAINVIEWER = graphql`
// # github graphql query to get more details  
//   query mainVIEWERQuery{
//    viewer{
//     name
//     email
//     bio
//    }
//   }
// `;



// export default makeRouteConfig(
//   <Route path="/"
//     Component={App}
//     query={MAINVIEWER}>
//     <Route Component={Home} />
//     <Route path="test" Component={Test} />

//     <Redirect from="baz" to="/foo" />
//   </Route>,
// )


export const routes = [
  { path: "/", element: <Home/> },
  {path: "test", element: <Test/>},
  { path: "login", element: <Login/> },
]
