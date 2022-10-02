import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { onerepoFullRepoQuery } from './__generated__/onerepoFullRepoQuery.graphql';
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



// export const RepositoryFragment = graphql`
//   fragment onerepo_repository on User
//   @argumentDefinitions(
//     first: { type: "Int", defaultValue: 10 }
//     after: { type: "String" }
//   )
//   @refetchable(
//     queryName: "RepositoryPaginationQuery"
//   ) {
//     repository(first: $first, after: $after , orderBy: { field: PUSHED_AT, direction: DESC })
//        @connection(key: "onerepo_repository") {
//       edges {
//         node {
//          nameWithOwner,
//          forkCount,
//          ...Stars_stargazers,
//          ...Branches_refs
//         }
//       }
//       pageInfo {
//         endCursor
//         hasNextPage
//         hasPreviousPage
//         startCursor
//       }
//       totalCount
//     }
//   }
// `;


