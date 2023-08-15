import SVG from "@common/svg";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center mx-auto my-5 border-[2px] rounded rounded-[6px] border-[#AAAAAA] px-4 focus-within:border-blue-500 w-1/3 bg-[#F5F5F5]">
      <div className="relative flex items-center">
        <SVG
          name="Search"
          width={24}
          height={24}
          className="text-gray-400 absolute left-3"
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-8 py-2 focus:outline-none text-[#CBD2E0] bg-[#F5F5F5]"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
