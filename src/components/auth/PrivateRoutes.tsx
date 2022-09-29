import { Navigate } from "@tanstack/react-location";
import { ReactNode } from 'react';
type Types = {
   isLoggedIn: boolean
   children: ReactNode
}
const ProtectedRoute = ({ isLoggedIn, children }: Types) => {
   if (!isLoggedIn) {
      return <Navigate to="/" />;
   } else {
      return <Navigate to="/login" />;
   }
   return children;
};
export default ProtectedRoute;
