import React,{useState,useContext} from "react";
import { IconContext } from "react-icons";
import { FaSearch , FaTimes} from "react-icons/fa";
import { ResultsList } from "./ResultsList";
import { UseQueryResult } from "react-query";
import { SearchEdge } from "./types";


interface SearchBoxProps {
  keyword: { word: string };
  setKeyword: React.Dispatch<React.SetStateAction<{ word: string }>>;
  action: () => any;
  title: string;
  results: SearchEdge[];
  search_query: UseQueryResult<any, unknown>;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  keyword,
  setKeyword,
  action,
  title,
  results,
  search_query,

}) => {
  //  const size = useScreenSize(window.innerWidth, window.innerHeight);
  //  //console.log("sie of screen = === ",size)
  const handleChange = async (e: any) => {
    const { value } = e.target;
    setKeyword({
      ...keyword,
      [e.target.id]: value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    action();
  };
  return (
    <div className="w-full  h-fit p-[2px] flex flex-col items-center justify-center  z-50">
      <form  className="w-full flex items-center  justify-center ">
        <div className="flex-center w-[100%] md:w-[50%] border-black border rounded-md ">
          <input
            className="w-[100%]  p-[5px] md:p-1 mx-1 dark:bg-slate-700  
            mr-2 "
            id="word"
            placeholder={title}
            onChange={handleChange}
            value={keyword.word}
            autoComplete={"off"}
          />
          <button type="submit">
            <IconContext.Provider
              value={{
                size: "20px",
                className: "mx-1",
              }}
            >
              {results?.length > 0 || keyword.word !== "" ? (
                <FaTimes onClick={()=>action()}/>
              ) : (
              null
              )}
            </IconContext.Provider>
          </button>
        </div>
      </form>

      {
      // keyword.word !== "" &&
      // keyword.word.length > 3 &&
      // !search_query?.error &&
      // !search_query?.isFetched &&
      search_query.isFetching &&
      title !== "filter repo"
      ? (
        <div
          style={{ position: "fixed", top: "100px" }}
          className=" w-[70%]  flex-center h-[10%] fixed
          top-[15%] bg-slate-200 dark:bg-slate-900 text-lg rounded "
        >
          searching....
        </div>
      ) : null}


      {search_query?.isFetched &&
      results?.length === 0 &&
      keyword.word !== "" &&
      title !== "filter repo"
      
      ? (
        <div
          style={{ position: "fixed", top: "100px" }}
          className=" w-[90%] md:w-[50%]   flex-center h-[10%] 
          fixed top-[15%] bg-slate-200 dark:bg-slate-900 text-lg 
          rounded " 
        >
          no matches, try different key words
        </div>
      ) : null}
      {results && keyword.word !== "" && title !== "filter repo" ? (
        <div className="fixed top-[50px] left-0 w-full h-full bg-slate-400 bg-opacity-40">
        <div
          className=" w-[90%] fixed top-[70px] left-[20px] flex items-center justify-center 
          md:justify-start h-[70%]   dark:text-white
           dark:border-white dark:shaow-white z-50 "
        >
          <ResultsList results={results} setKeyword={setKeyword} />
        </div>
        </div>
      ) : null}
    </div>
  );
};
