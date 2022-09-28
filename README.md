<script src="https://cdn.tailwindcss.com"></script>
# Starter files for vite with react and tailwindcss

### *clone the repo and do `npm install` and do `npm update` if necesary*


### dependancies 
- **tailwindcss**
- **dayjs for time formating**
- **react-query for server state management**
- **uniqid**
- **react-icons**


### [custom components](src\components\Shared)

### [resct-query](src\main.tsx) :
is preconfigured feel free to omit the defaultConfig if you want default behaviour

tailwind is configured with a few custom classes
```css
.flex-center{
  @apply flex justify-center items-center
}
.flex-center-col{
  @apply flex flex-col justify-center items-center
}
.scroll-bar {
  @apply scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-green-500;
}

```


# **relay**

*Relay is a JavaScript framework for fetching and managing GraphQL data in React applications that emphasizes maintainability, type safety and runtime performance*  <br>
<br>
**i'd simply summarize it as  very opinionated**

### [full code](https://github.com/tigawanna/starter-vite-relay)
ideal use cases for relay
 - 
 - ### **Nested compnenets with multiple layers of pagination**<br>
     this is the main reason i picked it up and i wish i gave it a chance sooner
      ```ts
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
      ```
      with only that snippet it'll fetch the next 5 in the list and automatically mereg them to the previous data , if you've worked with `apollo-client`/`urql`/`react-query` you'll appreciate this simplicity

  - ### **complex application which relies on big queries**
       composing a framents for every component , then letting their compiler stich them together into the most optimum query is magic

## Downsides
 - the setup process is tedious and the cmmunity documentatin is really scarce
 - it doesn't have loading states and error states directly in the query results and you'll have to wrap compnents in `Suspense` and `ErrorBoundary`
```ts
  const res = await response.json()
  if(!response.ok){
    throw new Error(res.message,res)
  }

  // Get the response as JSON
  return res;
```
> i also added that snippet to throw an error if the status wasn't ok becasuse errors from this specific graphql api were embedded as the response which would cause relay client to error out withut knowing what specific error was returned 

- the documentation can compund your confusion
- the prefetching feature in `usePreloadedQuery` which is recomemnded fetch strategy is not supprted in react-router but this can be side sepped by just using `uselazyLadedQuery` instead
- requires the server to have a [compliant schema](https://relay.dev/docs/next/guides/graphql-server-specification/) 
in my case am using the github graphql api , but if you had your own server yu culd use something like [Hasura](https://hasura.io/) or just follw the spec specified when making your own
> you can transform your response before it's passed into the provider if you still want to use it with our current data [like shown in this tutorial](https://dev.to/ttoss/lett-s-go-build-pagination-with-relay-and-react-an-intermediary-tutorial-f89)



### usage 
- npm install
- add .env file with your github personal access token 
```ts
VITE_TOKEN = your_personall_access_token
```
- npm run dev
  > this will only run the compiler once , my attempts to run the compiler wit the `--watch` flag were futile so i run npm run relay in another terminal everytime i change the query 

#### brief explanation
 my obective with this was to createa a github repository dash board for my [github API project](https://github.com/tigawanna/gitdeck.git) , [live preview](http://gitdeck-two.vercel.app/) 

 one of the things i wanted was to list all the branches and list all the cmmits under each branch with pagination on both layers ,
 paginnatating over the first layer worked with react query but the pproblems kept piling and the experience got more inconsistent when trying to do nesetd pagination , apollo wasn't great at it too , Urql was the worst sinceit's pagination strategy was swapping out variables to trigger the re-rener and in all of the above you'd have to merger arrays that are nested almost 3 levels deep that was very inefficient , didn't workas expected so i switched to relay and it fixed that issue remarhably well 

 *Note: in cases like these i'd usually break the query down and execute thechild query in the cild component but in this case this was the query:*
 ```ts
 export const REPOREFS = gql`
         # github graphql query to get more details
         query getRepoRefs(
           $repoowner: String!
           $reponame: String!
           $first: Int
           $after: String
           $firstcommits: Int
           $$aftercommits: String
         ) {
           repository(owner: $repoowner, name: $reponame) {
             nameWithOwner

             #refs: get branches and all the recent commits to it

             refs(
               refPrefix: "refs/heads/"
               orderBy: { direction: DESC, field: TAG_COMMIT_DATE }
               first: $first
               after: $after
             ) {
               edges {
                 node {
                   name
                   id
                   target {
                     ... on Commit {
                       history(first: $firstcommits, after: $aftercommits) {
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

             # end of refs block
           }
         }
       `;
 ```
*there was no varaible that i coud pass into the child compnent in order for it to fetch this query in order to query the commits in a child component*

the relay alternative looks like this 
[onerepo.tsx](src\components\repo\onerepo.tsx)
```ts
export const FULLREPO = graphql`

  query onerepoFullRepoQuery(
    $repoowner: String!,
    $reponame: String!,
    ) {
    repository(owner: $repoowner, name: $reponame) {
    nameWithOwner,
    forkCount,
    ...Stars_stargazers
    ...Branches_refs
    # stargazers(after:$after,first:$first)  @connection(key: "Stars_stargazers"){
    #   ...Stars_stars
    # }
   }
  }
`;
```

and then every child component only defines a fragement of the main query 
[branches.tsx](src\components\repo\Branches.tsx)
```ts
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

```
[Commits.tsx](src\components\repo\Commits.tsx)
```ts
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
```
 giving the child compnents relative autonomy and isolating changes and re-renders to the corresponding components

lastly , it (relay-compiler) generates types for you , they have a weird ting with flow in all their examples but it'll gererate typescrit types if you define it in the compiler options in the [package.json](package.json)
```ts
  "relay": {
    "src": "./src",
    "schema": "schema.docs.graphql",
    "language": "typescript",
    "eagerEsModules": true,
    "exclude": [
      "**/node_modules/**",
      "**/__mocks__/**",
      "**/__generated__/**"
    ]
  }
```

### [full code](https://github.com/tigawanna/starter-vite-relay)
[the article link](https://dev.to/tigawanna/my-experience-with-graphql-relay-vite-and-github-api-5b97)

#### helpfull references
[relay pagination tutorial](https://dev.to/ttoss/lett-s-go-build-pagination-with-relay-and-react-an-intermediary-tutorial-f89)

[another helpfull article](https://dev.to/zth/pagination-with-minimal-effort-in-relay-gl4)

[brief video explanation](https://www.youtube.com/watch?v=xnvzz7Z658I&t=25s)

[graphql client playground](https://graphiql-online.com/graphiql)

to configure for github graphql api just add your personal access token in the headers and cchange the endpoint

![gql playground by hasura](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ksfsjnutl76n3apkbsw9.png)

and test out queries , hit ctrl spacebar to get autocomplete
and field suggstion.

this package and the compiler rely on babel , i sued vite react fro this projectandit doesn't use babel as the build tool but there's [a plugin that helaps with that](https://www.npmjs.com/package/vite-plugin-relay)

Also just in case you're building something fromthe ground up consider a [different router](https://stackoverflow.com/questions/68358785/how-do-i-use-react-router-with-relay)

<h3 class="bg-slate-400">--- The End ---</h3>
