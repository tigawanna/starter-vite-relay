import { graphql } from "relay-runtime";

export const UserFragment = graphql`
  fragment fragments_user on User {
    id
    name
    login
    email
    bio
    avatarUrl
    company
    twitterUsername
    createdAt
    isFollowingViewer
    viewerIsFollowing
    isViewer
    location
    url
    
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

    repositories(first: 1) {
      totalCount
      nodes {
        id
      }
    }
  }
`;
