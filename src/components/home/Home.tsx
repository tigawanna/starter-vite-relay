import { useMatch } from '@tanstack/react-location';
import React from 'react'
import { useState } from 'react';
import { TabItem } from '../Shared/TabItem';
import { ProfileInfo } from '../people/ProfileInfo';
import { graphql } from 'relay-runtime';
import { AppROOTVIEWERQuery$data } from '../../__generated__/AppROOTVIEWERQuery.graphql';
import { useFragment } from 'react-relay';
import { Home_user$data } from './__generated__/Home_user.graphql';





interface HomeProps {
    viewer: AppROOTVIEWERQuery$data
}

export const Home: React.FC<HomeProps> = ({viewer}) => {
const [currTab, setCurrTab] = useState<string>("repo")
const data = useFragment(HomeVIEWERfragmant, viewer.viewer);
console.log("data in home from fragment === ", data)

const response = data as Home_user$data
 const tabs = [
    ['repo', response?.following?.totalCount],
    ['followers', response?.followers?.totalCount], 
    ['following', response?.repositories?.totalCount]
]

return (
    <div className="min-h-screen h-full flex flex-col justify-start">
        <div className="h-[20%]">
            <ProfileInfo viewer={viewer}/>
        </div>

        <div className="min-h-[80%] flex flex-col justify-start">
        <div className="w-full flex items-center justify-evenly 
        flex-wrap sticky z-50 top-[10%] dark:bg-slate-700 bg-white">
                {tabs.map((item, index) => {
                    return (
                        <TabItem
                            value={item[0] as string}
                            count={item[1] as number}
                            currTab={currTab}
                            setValue={setCurrTab}
                            key={index}
                        />
                    );
                })}
            </div>

            {/* {currTab === "repo" ? (
                <Repository
                    username={response?.login as string}
                />
            ) : null}

            {currTab === "followers" ? (
                <Followers
                  user={response}
                />
            ) : null}
            {currTab === "following" ? (
                <Following
                   user={response}
                />
            ) : null} */}
        </div>
    </div>
);
}






// export const ROOTVIEWER = graphql`
// # github graphql query to get more details
//   query HomeROOTVIEWERQuery{
//    viewer{
// ...Following_following
// ...Followers_followers
// ...Repositories_repositories
// }
// }
// `;


export const HomeVIEWERfragmant = graphql`
# github graphql query to get more details
  fragment Home_user on User{
    followers(first: 1) {
      totalCount
      nodes {
        id
      }
    }
    following(first: 1) {
      totalCount
      nodes {
        id
      }
    }
    
  repositories(first:1){
   totalCount
    nodes{
      id
    }
    }
   
  }
`;
