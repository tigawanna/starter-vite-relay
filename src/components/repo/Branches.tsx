import React from "react";
import {
  graphql,
  usePaginationFragment,
} from "react-relay/hooks";
import { Commits } from "./Commits";
import { BranchesPaginationQuery } from "./__generated__/BranchesPaginationQuery.graphql";
import {
  Branches_refs$data,
  Branches_refs$key,
} from "./__generated__/Branches_refs.graphql";

interface BranchesProps {
  data: Branches_refs$key | null;
}

export const Branches: React.FC<
  BranchesProps
> = ({ data }) => {
  //@ts-ignore
  const fragData = usePaginationFragment<BranchesPaginationQuery,_>(Branchesfragment, data);
  const branches = fragData.data as Branches_refs$data;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full  flex-center text-lg font-semibold">
        Branches
      </div>
      <div className="w-full flex-center-col">
        {branches?.refs?.edges?.map(
          (branch, index) => {
            return (
              <div
                key={index}
                className="w-full  flex-center-col text-lg font-semibold"
              >
                <div className="w-full  flex-center text-lg font-semibold">
                  Branch {branch?.node?.name}
                </div>
                <div className="w-full ">
                  <Commits
                    data={branch?.node?.target}
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
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

export const Branchesfragment = graphql`
  fragment Branches_refs on Repository
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 3 }
    after: { type: "String" }
  )
  @refetchable(
    queryName: "BranchesPaginationQuery"
  ) {
    refs(
      refPrefix: "refs/heads/"
      orderBy: {
        direction: DESC
        field: TAG_COMMIT_DATE
      }
      first: $first
      after: $after
    ) @connection(key: "Branches_refs",) {
      edges {
        node {
          name
          id
          target {
            ...Commits_history
          }
        }
      }
    }
  }
`;
