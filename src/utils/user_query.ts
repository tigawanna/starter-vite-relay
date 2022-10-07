import gql from "graphql-tag";

export const USERSEARCH = gql`
  query userSearch(
    $query: String!
    $first: Int
    $type: SearchType!
  ) {
    search(
      query: $query
      first: $first
      type: $type
    ) {
      repositoryCount
      discussionCount
      userCount
      codeCount
      issueCount
      wikiCount

      edges {
        node {
          ... on User {
            login
            name
            email
            avatarUrl
            url
          }
        }
      }
    }
  }
`;
