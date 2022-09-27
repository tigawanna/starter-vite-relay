import React from "react";
import {
  commitMutation,
  graphql,
  usePaginationFragment,
} from "react-relay/hooks";
import { CommitsPaginationQuery } from "./__generated__/CommitsPaginationQuery.graphql";
import {
  Commits_history$data,
  Commits_history$key,
} from "./__generated__/Commits_history.graphql";

interface CommitsProps {
  data?: Commits_history$key | null;
}

export const Commits: React.FC<CommitsProps> = ({
  data,
}) => {
  //@ts-ignore
  const fragData = usePaginationFragment<CommitsPaginationQuery,_>(CommitsOnBranchFragment, data);
 const commits = fragData?.data as Commits_history$data;
  return (
    <div className="w-full p-1 m-2 flex-center-col bg-purple-900 ">
      {commits.history.edges?.map(
        (commit, index) => {
          return (
            <div
              key={index}
              className="w-[80%] border p-1 m-1"
            >
              Commit:
              <div className="w-full text-xl font-bold">
                {commit?.node?.author?.name}
              </div>
              <div className="w-full text-sm capitalize truncate">
                {commit?.node?.message}
              </div>
            </div>
          );
        }
      )}
      {fragData.isLoadingNext ? (
        <div className="w-full h-full">
          loading more...
        </div>
      ) : null}

      {!fragData.isLoadingNext &&
      fragData.hasNext ? (
        <button
          className="m-2 hover:text-purple-400 shadow-lg hover:shadow-purple"
          onClick={() => {
            fragData.loadNext(5);
          }}
        >
          --- load more ---
        </button>
      ) : null}
    </div>
  );
};

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
