import React, { useState } from "react";
import appString from "../utils/appStrings";
const SearchBar = ({
  searchLabel,
  searchTerm,
  onChange,
}: {
  searchLabel: string;
  searchTerm: string;
  onChange: (term: string) => void;
}) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="relative flex max-w-full justify-center">
      <label className="block">
        <input
          type="text"
          placeholder={`${appString.pt.search}...`}
          value={searchTerm}
          onChange={handleSearchChange}
          className="min-w-96 rounded-lg border border-slate-200 px-4 py-2 text-gray-700 transition duration-300 ease-in-out focus:border-transparent focus:outline-none "
        />
      </label>
    </div>
  );
};

export default SearchBar;