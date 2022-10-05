import { Navigate } from '@tanstack/react-location';
import React from 'react'
import { ReactNode, Children } from 'react';
import { useLocalStoreValues } from './../../store';

interface ProtectedProps {
children:ReactNode
}
//@ts-ignore
export const Protected: React.FC<ProtectedProps> = ({children}) => {
    const {localValues} = useLocalStoreValues()
    console.log("logged in ? == ",localValues.token)
    if(!localValues.token){
        return (<Navigate to='/login' replace />)
    }
return children

}
