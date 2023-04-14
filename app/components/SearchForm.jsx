"use client";

import React from "react";
import { useState } from "react";
import Dictionary from "./Dictionary";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [noSearchResult, setNoSearchResult] = useState(false);
  const [loading, setLoading] = useState(false);

  //   Search Function the handles the search api request
  async function handleSearch(e) {
    e.preventDefault();
    // setLoading(true);
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
      );
      const data = await response.json();
      if (data.length > 0) {
        setResults(data);
        setNoSearchResult(false);
        setLoading(false);
      } else {
        setResults([]);
        setLoading(false);
        setNoSearchResult(true);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching search results:", error);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="grid lg:grid-cols-8 md:grid-cols-8 grid-cols-2 my-6 hover:bg-green-500"
      >
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type here to search here"
          className="w-full bg-green-100 lg:col-span-7 md:col-span-7 col-span-2 py-3 px-4 focus:ring-0 focus:ring-offset-0 border-none focus:outline-none"
        />
        <button
          type="submit"
          className="lg:col-span-1 md:col-span-1 col-span-2 bg-green-600 text-white py-3 px-4 hover:bg-green-500"
        >
          Search
        </button>
      </form>
      <Dictionary
        results={results}
        noSearchResult={noSearchResult}
        search={search}
        loading={loading}
      />
    </>
  );
};

export default SearchForm;
