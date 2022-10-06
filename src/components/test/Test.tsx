import { MakeGenerics } from '@tanstack/react-location';
import React from 'react'
import { PreloadedQuery } from 'react-relay';
import { AppPROFILEVIEWERQuery } from '../../__generated__/AppPROFILEVIEWERQuery.graphql';

interface TestProps {

}

type LocationGenerics = MakeGenerics<{
    LoaderData: {
        user: PreloadedQuery<AppPROFILEVIEWERQuery, {}>
    };
}>;

export const Test: React.FC<TestProps> = ({}) => {
return (
 <div className='bg-green-500 min-h-screen w-full'>
TEST
 </div>
);
}








