// your-app-name/src/fetchGraphQL.js
import { useLocalStoreValues } from "./../store";


async function fetchGraphQL(text:any, variables:any) {



  try{
 const localdata = useLocalStoreValues.getState(); 

// Fetch data from GitHub's GraphQL API:
  const response = await fetch(
    "https://api.github.com/graphql",
    {
      method: "POST",
      headers: {
        Authorization: `bearer ${
          import.meta.env.VITE_TOKEN
        }`
,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    }
  );

  const res = await response.json()
  if(!response.ok){
    throw new Error(res.message,res)
  }

  // Get the response as JSON
  return res;
  }
  catch(e){
  console.log("error fetching ",e)
  }
  
}

export default fetchGraphQL;
