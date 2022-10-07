import React from 'react'
import { graphql, PreloadedQuery, useLazyLoadQuery, usePreloadedQuery } from 'react-relay/hooks';
import { OnerepoFullRepoQuery } from './__generated__/onerepoFullRepoQuery.graphql';
import { Branches } from './Branches';
import { MakeGenerics, useMatch } from '@tanstack/react-location';


interface onerepoProps {

}
type LocationGenerics = MakeGenerics<{
  LoaderData: {
    repoQueryRef: PreloadedQuery<OnerepoFullRepoQuery, {}>
  };
}>;

export const Onerepo: React.FC<onerepoProps> = ({}) => {
const stuff = useMatch<LocationGenerics>();

  // const data = useLazyLoadQuery<OnerepoFullRepoQuery>(FULLREPO,{
  //   reponame:"tsconfig.json",
  //   repoowner: "benawad",
  // });

  const data =
    usePreloadedQuery<OnerepoFullRepoQuery>(
      FULLREPO,
      //@ts-ignore
      stuff.data.repoQueryRef
    );

// console.log("one repo query == ",data)

return (
<div className='w-full   h-full flex-col-center '>
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

  query OnerepoFullRepoQuery(
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


