import { useState, useEffect } from "react";
//API
import API from "../API";

const initialeState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useMultiSearch = () => {
  const [searchMulti, setSearchMulti] = useState("");
  const [multi, setMulti] = useState(initialeState);
  const [searchLoading, setSearchLoading] = useState(false);
  const fetchMultiSearch = async (page, searchMulti = "") => {
    try {
      setSearchLoading(true);
      const searchResults = await API.fetchMultiSearch(page, searchMulti);
      setMulti(prev => ({
        ...searchResults,
        results:
          page > 1
            ? [...prev.results, ...searchResults.results]
            : [...searchResults.results],
      }));
      setSearchLoading(false);
    } catch {
      console.log("oops,something went wrong");
    }
  };

  //multi search
  useEffect(() => {
    setMulti(initialeState);
    fetchMultiSearch(1, searchMulti);
  }, [searchMulti]);

  return { multi, searchMulti, setSearchMulti,searchLoading};
};
