import React, { Suspense } from 'react'
import { Onerepo } from '../repo/onerepo';
import { loadQuery, graphql, usePreloadedQuery, PreloadedQuery, useLazyLoadQuery, useQueryLoader } from 'react-relay/hooks';
import { HomeTabQuery } from './__generated__/HomeTabQuery.graphql';
import RelayEnvironment from '../../relay/RelayEnviroment'
import { HomeFullRepoQuery } from './__generated__/HomeFullRepoQuery.graphql';
import { mainRepoQuery$data } from '../../__generated__/mainRepoQuery.graphql';
import { Stars } from '../repo/Stars';
import { mainVIEWERQuery, mainVIEWERQuery$data } from '../../__generated__/mainViewerQuery.graphql';
import { Loading } from '../Shared/Loading';
import { LoadingShimmer } from '../Shared/LoadingShimmer';


interface HomeProps {
token:string
data: mainVIEWERQuery$data

}

export const Home: React.FC<HomeProps> = ({data}) => {
console.log("data == ", data)


return (
<div className='w-full min-h-screen h-full flex-center-col'>
    <div className='text-lg font-bold flex-center bg-blue-900'>
      <div className='text-lg font-bold flex-center mx-1'>
      {data.viewer.name}
        @{data.viewer.email}
      </div>
      <div className='flex-center mx-1 truncate'>
        {data.viewer.bio}
      </div>

    </div>
    <div className='h-full w-full text-lg font-bold flex-center'>
      <Suspense fallback={<LoadingShimmer />}>
      <Onerepo />
      </Suspense>
    </div>
   
  </div>
);
}



