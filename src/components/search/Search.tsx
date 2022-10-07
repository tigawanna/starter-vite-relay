import React, { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { useGQLQuery } from "../../utils/gqlquery";
import { SearchBox } from "./SearchBox";
import { SearchQuery } from "./__generated__/SearchQuery.graphql";
import { useLocalStoreValues } from './../../store';
import { USERSEARCH } from "../../utils/user_query";
import { SearchResult } from "./types";


interface SearchProps {}

export const Search: React.FC<
  SearchProps
> = ({}) => {
  const {localValues} =useLocalStoreValues()
  const token =  localValues.token as string
  const [keyword, setKeyword] = React.useState({
    word: "tigawanna",
  });
  const [validating, setValidating] = React.useState(true);

  const search_query = useGQLQuery(
    ["search-user", keyword.word, token],
    token ,
    USERSEARCH,
    { query: keyword.word, first: 10, type: "USER" },
    {
      enabled: keyword?.word?.length > 3 && token ? true : false,
      onSuccess: (data: any) => {

        setValidating(false);
      },
      onError: (error: any) => {

        setValidating(false);
      },
    }
  );
  const search_results = search_query.data?.search as SearchResult;
  const action = () => {
    setKeyword({ word: "" });
  };

  return (
    <div className="h-full w-full flex-center">
      <SearchBox
        keyword={keyword}
        setKeyword={setKeyword}
        action={action}
        title={"email or username"}
        results={search_results?.edges}
        search_query={search_query}
      
      />
    </div>
  );
};



