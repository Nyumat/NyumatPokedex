import React, { useEffect } from "react";
import useSearch from "../hooks/useSearch";

interface SearchFormProps {
  searchTerm: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm = ({ searchTerm, handleChange }: SearchFormProps) => {
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search For A Pokemon"
      />
    </>
  );
};

export default SearchForm;
