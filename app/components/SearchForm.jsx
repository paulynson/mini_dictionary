"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import Dictionary from "./Dictionary";
import AOS from "aos";
import 'aos/dist/aos.css';

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [noSearchResult, setNoSearchResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const ref = useRef();

  // Animation
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);


  // Focus the input when page loads
  useEffect(() => {
    ref.current.focus();
    // Check again when the result is not seen and clear the result info when the input is focus
    if (ref.current.focus()) {
      setNoSearchResult(!noSearchResult);
    } else {
      setNoSearchResult(false);
    }
  }, [search]);

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
        className="grid lg:grid-cols-8 md:grid-cols-8 grid-cols-2 my-6"
        data-aos="flip-left" data-aos-delay="50"
      >
        <input
          type="search"
          ref={ref}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type here to search here"
          className="w-full bg-green-100 lg:col-span-7 md:col-span-7  col-span-2 py-3 px-6 focus:ring-0 focus:ring-offset-0 border-none focus:outline-none lg:rounded-l-full md:rounded-l-full "
        />
        <button
          type="submit"
          className="lg:col-span-1 md:col-span-1  col-span-2 bg-green-600 text-white py-3 px-4 hover:bg-green-500 lg:rounded-r-full font-bold md:rounded-r-full lg:text-sm text-xs"
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
