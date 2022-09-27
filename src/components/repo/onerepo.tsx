import React from 'react'
import { PreloadedQuery } from 'react-relay';
import { HomeFullRepoQuery } from '../home/__generated__/HomeFullRepoQuery.graphql';
import { usePreloadedQuery, graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { onerepoFullRepoQuery } from './__generated__/onerepoFullRepoQuery.graphql';
import { Stars } from './Stars';
import { Branches } from './Branches';


interface onerepoProps {

}

export const Onerepo: React.FC<onerepoProps> = ({}) => {
  const data = useLazyLoadQuery<onerepoFullRepoQuery>(FULLREPO,{
    reponame:"tsconfig.json",
    repoowner: "benawad",
  });

  console.log("one repo query == ",data)
  const wh = data.repository
return (
<div className='w-full  h-screen flex-col-center '>
    <div className='w-full flex-center p-5'>
    <div className='text-lg font-semibold flex-center p-5'>
        {data.repository?.nameWithOwner}
    </div>
    <div className='text-lg font-semibold flex-center p-5'>
      {data.repository?.forkCount}
    </div>
    </div>
    <div className='w-full flex-center-col p-5 h-full'>
      <Branches data={data.repository}/>
      {/* <Stars data={data.repository}/> */}

    </div>    
   
</div>
);
}


export const FULLREPO = graphql`

  query onerepoFullRepoQuery(
    $repoowner: String!,
    $reponame: String!,
    ) {
    repository(owner: $repoowner, name: $reponame) {
    nameWithOwner,
    forkCount,
    ...Stars_stargazers
    ...Branches_refs
    # stargazers(after:$after,first:$first)  @connection(key: "Stars_stargazers"){
    #   ...Stars_stars
    # }
   }
  }
`;
