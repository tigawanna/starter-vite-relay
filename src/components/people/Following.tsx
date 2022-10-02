import React from "react";
import { PersonCard } from "./personCard";
import { FOLLOWINGPAGE, ROOTFOLLOWING } from "./utils/types";
import { graphql } from "relay-runtime";


interface FollowingProps {
  
}

export const Following: React.FC<FollowingProps> = ({  }) => {


  const data = query.data as ROOTFOLLOWING;



  const pages = data?.pages;
  // console.log("followers === ", data);
  const extras = pages[pages.length - 1].user?.following;
  const hasMore = extras?.pageInfo?.hasNextPage;

  return (
    <div className="min-h-screen w-full flex flex-col justify-start h-full mb-5 ">
      <div className="h-fit w-full flex-center  flex-wrap">
        {pages?.map((page) => {
          return page?.user?.following?.edges?.map((item, index) => {
            return (
              <PersonCard
                key={item.node.id + index}
                dev={item?.node}
               />
            );
          });
        })}
      </div>
      {/* {!query.isFetchingNextPage && hasMore ? (
        <button
          className="m-2 hover:text-purple-400 shadow-lg hover:shadow-purple"
          onClick={() => {
            query.fetchNextPage();
          }}
        >
          --- load more ---
        </button>
      ) : null}
      {query.isFetchingNextPage ? (
        <div className="w-full flex-center">
          <Loading size={20} />
        </div>
      ) : null} */}
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
      id
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
