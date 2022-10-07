import React from 'react'
import { graphql } from 'relay-runtime';

interface LanguagesProps {

}

export const Languages: React.FC<LanguagesProps> = ({}) => {
return (
 <div>
   languages
 </div>
);
}


export const CommitsOnBranchFragment = graphql`
  fragment Commits_history on Commit
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 5 }
    after: { type: "String" }
  )
  @refetchable(
    queryName: "CommitsPaginationQuery"
  ) {
    history(first: $first, after: $after)
       @connection(key: "Commits_history") {
      edges {
        node {
          committedDate
          author {
            name
            email
          }
          message
          url
          pushedDate
          authoredDate
          committedDate
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      totalCount
    }
  }
`;
