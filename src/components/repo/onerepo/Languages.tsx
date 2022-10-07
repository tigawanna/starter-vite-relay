import React from "react";
import { usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { LanguagesPaginationQuery } from "./__generated__/LanguagesPaginationQuery.graphql";
import { Languages_languages$data, Languages_languages$key } from "./__generated__/Languages_languages.graphql";

interface LanguagesProps {
  data:Languages_languages$key
}

export const Languages: React.FC<LanguagesProps> = ({data}) => {
const fragData = usePaginationFragment<LanguagesPaginationQuery, any>(
    LanguagesFragment,
    data
  );

  // console.log("child fragments ", fragData.data);
  const frags = fragData.data as Languages_languages$data
  return <div>languages</div>;
};

export const LanguagesFragment = graphql`
  fragment Languages_languages on Repository
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 5 }
    after: { type: "String" }
  )
  @refetchable(
    queryName: "LanguagesPaginationQuery"
  ) {
  languages(first: $first, after: $after) 
  @connection(key: "Languages_languages") {
    edges {
      node {
      id,
      color,
      name
      }
  },
    pageInfo {
    endCursor,
      hasNextPage,
      hasPreviousPage,
      startCursor
  },
  totalCount
    }
  }
`;


