import React from "react";

const useSearch = (searchData: any) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
    let results = searchData.filter((item: any) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  };

  return { searchTerm, searchResults, handleChange };
};

export default useSearch;
