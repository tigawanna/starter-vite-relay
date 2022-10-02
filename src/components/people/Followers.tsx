import React from "react";
import { PersonCard } from "./personCard";
import { FOLLOWERS } from "./utils/queries";
import { FOLLOWERSPAGE, ROOTFOLLOWERS } from "./utils/types";
import { Loading } from './../Shared/Loading';
import { graphql } from "relay-runtime";


interface FollowersProps {
 user:OneUser|undefined
}

export const Followers: React.FC<FollowersProps> = ({user}) => {
const data = query.data as ROOTFOLLOWERS;


    const pages = data?.pages;
    //  console.log("followers === ",data)
    const extras = pages[pages.length - 1].user?.followers;
    const hasMore = extras?.pageInfo?.hasNextPage;

  return (
    <div className="min-h-screen w-full flex-col justify-start mb-5">
      <div className="h-fit w-full flex-center  flex-wrap">
        {pages?.map((page) => {
          return page?.user?.followers?.edges?.map((item,index) => {
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
      <div className="w-full flex-center ">
        <Loading size={20} />
      </div>
      ) : null} */}
    </div>
  );
};


export const FollowersFragment = graphql`
  fragment Followers_followers on User
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 10 }
    after: { type: "String" }
  )
  @refetchable(
    queryName: "FollowersPaginationQuery"
  ) {
    followers(first: $first, after: $after)
       @connection(key: "Followers_followers") {
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
