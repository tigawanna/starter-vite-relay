import React from 'react'
import { useState } from 'react';
import { TabItem } from '../Shared/TabItem';
import { ProfileInfo } from '../people/ProfileInfo';
import { graphql } from 'relay-runtime';
import { AppROOTVIEWERQuery$data } from '../../__generated__/AppROOTVIEWERQuery.graphql';
import { useFragment, useLazyLoadQuery } from 'react-relay';
import { Home_user$data } from './__generated__/Home_user.graphql';
import { Followers } from '../people/Followers';
import { Following } from '../people/Following';
import { App_user$data } from '../../__generated__/App_user.graphql';
import { Repositories } from '../repo/Repositories';
import { HomeVIEWERQuery } from './__generated__/HomeVIEWERQuery.graphql';





interface HomeProps {
  viewerData: AppROOTVIEWERQuery$data
  viewer_info: App_user$data
}

export const Home: React.FC<HomeProps> = ({viewerData,viewer_info}) => {

const [currTab, setCurrTab] = useState<string>("repo")
const data = useFragment(HomeVIEWERfragmant, viewerData.viewer);

const tabsData = useLazyLoadQuery<HomeVIEWERQuery>(HomeViewerQuery, {});
//  console.log("response viewer info == ",viewer_info)

const response = data as Home_user$data
 const tabs = [
    ['repo', response?.following?.totalCount],
    ['followers', response?.followers?.totalCount], 
    ['following', response?.repositories?.totalCount]
]

const refs= tabsData.viewer
return (
    <div className=" h-full flex flex-col justify-start">
        <div className="h-[20%]">
            <ProfileInfo refs={viewerData.viewer}/>
        </div>

        <div className="min-h-[80%] flex flex-col justify-start">
        <div className="w-full flex items-center justify-evenly 
           sticky z-30 top-[50px] dark:bg-slate-700 bg-white text-xl">
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

            {currTab === "repo" ? (
                <Repositories
                  refs={tabsData.viewer}
                />
            ) : null}

             {currTab === "followers" ? (
                <Followers
                    refs={tabsData.viewer}
                />
            ) : null} 

            {currTab === "following" ? (
                <Following
                   refs={tabsData.viewer}
       
                />
            ) : null}  


        </div>
    </div>
);
}






export const HomeViewerQuery = graphql`
# github graphql query to get more details
  query HomeVIEWERQuery{
viewer{
 ...Repositories_repositories
 ...Following_following
 ...Followers_followers

}
}
`;


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
