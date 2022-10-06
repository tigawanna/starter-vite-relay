import React from "react";

import {
  FragmentRefs,
  graphql,
} from "relay-runtime";
import { FollowingPaginationQuery } from "./__generated__/FollowingPaginationQuery.graphql";
import { Following_following$data } from "./__generated__/Following_following.graphql";
import { usePaginationFragment } from "react-relay";
import { Loading } from "../Shared/Loading";
import { PersonCard } from "./PersonCard";

interface FollowingProps {
  refs: {
    readonly " $fragmentSpreads": FragmentRefs<
      | "Followers_followers"
      | "Following_following"
      | "Repositories_repositories"
    >;
  } | null;
}

export const Following: React.FC<
  FollowingProps
> = ({ refs }) => {
  const following_data = usePaginationFragment<
    FollowingPaginationQuery,
    any
  >(FollowingFragment, refs);
  const following =
    following_data.data as Following_following$data;

  return (
    <div className="min-h-screen w-full flex flex-col justify-start h-full mb-5 ">
      <div className="h-fit w-full flex-center  flex-wrap">
        {following?.following?.edges?.map(
          (follow, index) => {
            console.log(
              "follow node === ",
              follow
            );
            return (
              <PersonCard
                key={index}
                //@ts-ignore
                dev={follow?.node}
                personRef={follow?.node}
              />
            );
          }
        )}
      </div>

      {following_data.hasNext &&
      !following_data.isLoadingNext ? (
        <button
          className="m-2 hover:text-purple-400 shadow-lg hover:shadow-purple"
          onClick={() => {
            following_data.loadNext(10);
          }}
        >
          --- load more ---
        </button>
      ) : null}

      {following_data.isLoadingNext ? (
        <div className="w-full flex-center">
          <Loading size={20} />
        </div>
      ) : null}
    </div>
  );
};

export const FollowingFragment = graphql`
  fragment Following_following on User
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 10 }
    after: { type: "String" }
  )
  @refetchable(
    queryName: "FollowingPaginationQuery"
  ) {
    following(first: $first, after: $after)
      @connection(key: "Following_following") {
      edges {
        node {
          ...PersonCard_user
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
