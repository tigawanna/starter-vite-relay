import React, { useState } from "react";
import dayjs from "dayjs";
import {
  BiGitRepoForked,
  BiHistory,
} from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { FaStar, FaLock } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiGithub,
} from "react-icons/si";
import relativeTime from "dayjs/plugin/relativeTime";
import { TheIcon } from "../Shared/TheIcon";
import { REPONODE } from "./utils/type";
import { Loading } from "../Shared/Loading";
import { FragmentRefs,graphql } from "relay-runtime";
import { usePaginationFragment } from "react-relay";
import { RepositoriesPaginationQuery } from "./__generated__/RepositoriesPaginationQuery.graphql";
import { Repositories_repositories$data } from "./__generated__/Repositories_repositories.graphql";
import { Link } from "@tanstack/react-location";

dayjs.extend(relativeTime);
interface RepositoryProps {
  refs: {
    readonly " $fragmentSpreads": FragmentRefs<
      | "Followers_followers"
      | "Following_following"
      | "Repositories_repositories"
    >;
  } | null;
}

export const Repositories: React.FC<
  RepositoryProps
> = ({ refs }) => {
  const [keyword, setKeyword] = useState({
    word: "",
  });

 const repos_data = usePaginationFragment<RepositoriesPaginationQuery,any>(RepositoriesFragment, refs);
const action = () => {
  setKeyword({ word: "" });
};

  const repos =
    repos_data.data as Repositories_repositories$data;
  const totalReposloaded =
    repos.repositories.edges?.length;

  return (
    <div className="min-h-screen w-full  flex flex-col justify-start">
      {/* <div
      className="h-[10%] p-1 w-full flex-center my-5 sticky top-[50px] z-50
     bg-white dark:bg-slate-800 transition duration-500"
    >
      <SearchBox
        keyword={keyword}
        setKeyword={setKeyword}
        action={action}
        title={"filter repo"}
        results={results}
        search_query={query}
      />
    </div> */}

      <div className="w-full flex-center sticky top-[20%] z-20">
        <div className="w-fit flex-center p-[2px] font-bold bg-white dark:bg-slate-900">
          {totalReposloaded}/
          {repos.repositories.totalCount}
        </div>
      </div>

      <div className="h-[80%] w-full flex-center flex-wrap  mb-1">
        {repos?.repositories?.edges?.map(
          (repo) => {
            return (
              <RepoCard
                //@ts-ignore
                repo={repo?.node}
                key={repo?.node?.id}
              />
            );
          }
        )}
      </div>
      {repos_data.hasNext &&
      !repos_data.isLoadingNext ? (
        <button
          className="m-2 hover:text-purple-400 shadow-lg hover:shadow-purple"
          onClick={() => {
            repos_data.loadNext(10);
          }}
        >
          --- load more ---
        </button>
      ) : null}

      {repos_data.isLoadingNext ? (
        <div className="w-full flex-center">
          <Loading size={20} />
        </div>
      ) : null}
    </div>
  );
};

interface RepoCardProps {
  repo: REPONODE;
}

export const RepoCard: React.FC<
  RepoCardProps
> = ({ repo }) => {
  // console.log("repo    ===  ",repo)
  // const repo_link = authedurl(repo.html_url,token)
  const vslink = `https://vscode.dev/${repo.url}`;

  return (
    <div
      className=" min-h-fit h-56 m-2 w-[95%] md:w-[40%] lg:w-[30%] p-5 flex-col 
     justify-between items-center border-black dark:border-white border rounded-md"
    >
      <div
        onClick={() => {}}
        className=" flex-col items-center  justify-between  cursor-pointer h-[90%] w-full"
       >
        <Link to={'/repo/' + repo.name + "--```--" + repo.owner.login}>
        <div className="text-[20px] font-semibold md:text-xl md:font-bold  break-all ">
          {repo?.name}
        </div>
     
        <div className="flex flex-wrap text-color">
          {repo?.languages.edges.map((item) => {
            return (
              <div
                key={item.node.id}
                style={{
                  borderStyle: "solid",
                  borderWidth: "2px",
                  borderColor: item.node.color,
                  borderRadius: "10%",
                }}
                className="p-[1px] m-[1px] text-[10px] font-semibold md:text-[10px]   break-all"
              >
                {item.node.name}
              </div>
            );
          })}
        </div>
        </Link>

        <div className="text-[14px] md:text-[11px] break-word  max-h-[45%] overflow-y-clip ">
          {repo?.description}
        </div>
        <div
          className="w-fit max-w-full text-[15px] text-sm  font-semibold text-yellow-50 
      flex felx-wrap bg-slate-700"
        >
          <TheIcon
            Icon={BiHistory}
            size={"15"}
            color={""}
          />
          <div className="bg-slate-700 px-[2px] mr-[3px] truncate w-fit">
            {repo?.refs?.edges[0]?.node?.name}
          </div>{" "}
          :
          <div className="px-[2px] truncate">
            {" "}
            {
              repo?.refs?.edges[0]?.node?.target
                ?.history?.edges[0]?.node?.message
            }
          </div>
        </div>
      </div>

      <div className="w-full text-[15px] text-sm  flex justify-between ">
        <div className="text-[12px] font-bold flex-center">
          <FiActivity />{" "}
          {dayjs(repo?.pushedAt).fromNow()}
        </div>
        <div className="flex-center">
          <BiGitRepoForked /> {repo?.forkCount}
        </div>
        {repo?.stargazers?.totalCount > 0 ? (
          <div className="flex-center">
            <TheIcon
              Icon={FaStar}
              size={""}
              color={"yellow"}
            />{" "}
            {repo?.stargazers?.totalCount}
          </div>
        ) : null}
        {repo?.visibility === "PRIVATE" ? (
          <div className="flex-center">
            <TheIcon
              Icon={FaLock}
              size={""}
              color={"red"}
            />
          </div>
        ) : null}

        <div className="flex-center">
          {repo?.diskUsage} kbs
        </div>
        <div className="flex-center">
          <a
            target="_blank"
            rel="noreferrer"
            href={vslink}
            className="mx-1"
          >
            <TheIcon
              Icon={SiVisualstudiocode}
              size={"18"}
              color={"blue"}
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={repo.url}
            className="mx-1"
          >
            <TheIcon
              Icon={SiGithub}
              size={"18"}
              color={""}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export const RepositoriesFragment = graphql`
  fragment Repositories_repositories on User
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 10 }
    after: { type: "String" }
  )
  @refetchable(
    queryName: "RepositoriesPaginationQuery"
  ) {
    repositories(
      first: $first
      after: $after
      orderBy: {
        field: PUSHED_AT
        direction: DESC
      }
    )
      @connection(
        key: "Repositories_repositories"
      ) {
      edges {
        node {
          id
          name
          description
          pushedAt
          diskUsage
          url
          visibility
          forkCount
          owner {
            login
            id
            url
            avatarUrl
          }

          languages(first: $first) {
            edges {
              node {
                id
                color
                name
              }
            }
          }

          refs(
            refPrefix: "refs/heads/"
            orderBy: {
              direction: DESC
              field: TAG_COMMIT_DATE
            }
            first: 2
          ) {
            edges {
              node {
                name
                id
                target {
                  ... on Commit {
                    history(first: 1) {
                      edges {
                        node {
                          committedDate
                          author {
                            name
                          }
                          message
                        }
                      }
                    }
                  }
                }
              }
            }
          }
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
