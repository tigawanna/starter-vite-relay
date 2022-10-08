import { DocumentNode } from "graphql";
import { gql, GraphQLClient } from "graphql-request";
import { useLocalStoreValues } from "../store";

type T = {
  token: string | null;
  query: DocumentNode;
  variables?: {};
};

type GqlErr = {
  message: string;
  documentation_url: string;
  status: number;
  headers: {
    map: any;
  };
};

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

export const checkToken = async({token}: T) => {
  const endpoint = "https://api.github.com/graphql";
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const graphQLClient = new GraphQLClient(
    endpoint,
    headers
  );
  
  const { localValues,updateMainUser,updateToken } = useLocalStoreValues.getState()

  try {
 const res = await graphQLClient.request(
      GETVIEWER,

    );
 updateMainUser({user:res,error:null})
 return res   
   } catch (e) {
         //@ts-ignore
    //  console.log(" viewer error === ", e.response);
     //@ts-ignore
     updateMainUser({user: null,error: e.response});
     //@ts-ignore
     if(e.response.message === 'Bad credentials')
     updateToken(null)
    //  updateToken(null)
     //@ts-ignore
     return e.response;
     //throw new Error(e.response.message,e.respose);
   }

};
