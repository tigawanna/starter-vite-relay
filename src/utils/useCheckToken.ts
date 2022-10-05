import { DocumentNode } from "graphql";
import { gql, GraphQLClient } from "graphql-request";
import { useState,useEffect } from 'react';
import { useLocalStoreValues } from "../store";

type T = {
query: DocumentNode;
  variables?: {};
}; 

type GqlErr={
    
    message:string,
    documentation_url: string,
    status: number,
    headers: {
        map:any
}
}


export const GETVIEWER = gql`
  query getViewer {
    viewer {
      id
      name
      login
      email
      bio
      avatarUrl
    }
  }
`;

export const useCheckToken=()=>{
const { localValues, updateMainUser,updateToken } = useLocalStoreValues()
const [viewer,setViewer] = useState(null)
const [error, setError] = useState<GqlErr|null>(null);
const token = localValues.token
    const endpoint = "https://api.github.com/graphql";
    const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
    const graphQLClient = new GraphQLClient(endpoint,headers);
 

 useEffect(()=>{
 const fetchdata=async()=>{
  try {
    const res = await graphQLClient.request(
      GETVIEWER
    );
    updateMainUser({ user: res, error: null });
    setError(null)
    if(res.error){
    setError(res.error);
    }
    else{
    setViewer(res);
    }
 } catch (e:any) {
     updateMainUser({user: null,error: e.response,});
     setError(e.response);
  }
}

fetchdata();
 },[token])
return {viewer,error}

}
