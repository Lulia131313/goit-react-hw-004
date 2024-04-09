import toast, { Toaster } from "react-hot-toast";
import { fetchImages } from "../../api/api";
import { useState } from "react";
import { Audio } from "react-loader-spinner";
import { IoIosSearch } from "react-icons/io";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.searchContainer}>
          <button type="submit" className={s.searchButton}>
            <IoIosSearch />
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={s.input}
          />
        </div>
      </form>
    </header>
  );
};
export default SearchBar;
