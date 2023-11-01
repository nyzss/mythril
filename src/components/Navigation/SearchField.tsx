import { SearchIcon, SendHorizonal } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchField = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const handleSubmit = () => {
    navigate("/search/" + search);
    setSearch("");
  };
  return (
    <>
      {/* <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 pl-10 text-sm text-neutral-900 border border-gray-300 rounded-lg bg-gray-100 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          required
        />
        <button
          type="submit"
          className="text-white absolute right-1.5 bottom-1.5 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:hover:bg-rose-500 dark:focus:ring-blue-800"
          onClick={handleSubmit}
        >
          <SendHorizonal
            size={20}
            className="text-neutral-900 dark:text-neutral-300"
          />
        </button>
      </div>
    </>
  );
};

export default SearchField;
