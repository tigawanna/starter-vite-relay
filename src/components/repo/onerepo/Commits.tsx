import React from "react";
import { graphql, usePaginationFragment} from "react-relay/hooks";

import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import { SiVisualstudiocode, SiGithub } from "react-icons/si";
import { TheIcon } from "../../Shared/TheIcon";
import { Commits_history$key, Commits_history$data } from "../__generated__/Commits_history.graphql";

dayjs.extend(relativeTime)
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
    <div className="w-full p-1 m-2 flex-center-col  ">
      {commits.history.edges?.map(
        (commit, index) => {
          return (
              <Commit commit={commit} key={commit?.node?.pushedDate + index}/>
          );
        }
      )}
      {fragData.isLoadingNext ? (
        <div className="w-full flex-center">
          loading more...
        </div>
      ) : null}

      {!fragData.isLoadingNext &&
      fragData.hasNext ? (
        <button
          className="m-2 hover:text-purple-900 shadow-lg hover:shadow-purple"
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




type CommitType = {
    readonly node: {
      readonly author: {
        readonly email: string | null;
        readonly name: string | null;
    } | null;
      readonly authoredDate: any;
      readonly committedDate: any;
      readonly message: string;
      readonly pushedDate: any;
      readonly url: any;
  } | null;
}
interface CommitProps {
  commit:CommitType|null
}



export const Commit: React.FC<CommitProps> = ({commit}) => {
const vslink = `https://vscode.dev/${commit?.node?.url}`;
return (
  <div
    className="w-full p-1 m-1 border rounded flex items-center  flex-wrap">

    <div className="w-fit mx-1  font-bold text-purple-900 dark:text-purple-200">
      {commit?.node?.author?.name}</div>
    <div className="w-fit text-sm p-1">
      {dayjs(commit?.node?.committedDate).fromNow()}
    </div>

    <div className="w-fit  m-1 font-serif break-all text-purple-900 dark:text-purple-200 text-sm">
      {commit?.node?.message}
    </div>
    <div className="p-1 flex">
      <a target="_blank" href={vslink}>
        <TheIcon Icon={SiVisualstudiocode} size={"18"} color={"blue"} iconstyle={"mx-2"} />
      </a>
      <a target="_blank" href={commit?.node?.url}>
        <TheIcon Icon={SiGithub} size={"18"} color={""} iconstyle={"mx-2"} />
      </a>

    </div>
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
