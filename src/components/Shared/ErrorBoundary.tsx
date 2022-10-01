import React, { Component, ErrorInfo, ReactNode } from "react";
import { Login } from "../auth/Login";
import { Navigate } from "@tanstack/react-location";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error:Error | null

}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error:null
    };

    public static getDerivedStateFromError(err: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true,error:err };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log("Uncaught error:", error.message)
        // console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        console.log("error boundary =",this.state.error)
        if (this.state.hasError) {
            if (this.state.error?.message === "Bad credentials") {
                return <Navigate to="/login" />;
            }    
            return(
                <div className="w-full min-h-screen h-full flex-center">
                    <div className="w-[50%] p-2 flex-center bg-red-100 text-red-600">
                        Something went wrong
                     {this.state.error?.message}
                    
                   </div>
            
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
