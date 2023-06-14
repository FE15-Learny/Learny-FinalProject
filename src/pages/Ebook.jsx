import React, { useEffect, useState } from "react";
import { ebooklist } from "../config/dataebook";
import EbookList from "../components/EbookList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import EmptyList from "../components/common/EmptyList";
import axios from "axios";

function Ebook() {
  const [ebooks, setEbooks] = useState(ebooklist);
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allEbooks = ebooklist;
    const filteredEbooks = allEbooks.filter((ebook) =>
      article.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setEbooks(filteredEbooks);
  };

  const handleClearSearch = () => {
    setArticles(ebooklist);
    setSearchKey("");
  };

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get(
          "https://64833958f2e76ae1b95c29a5.mockapi.io/articles"
        );
        setArticles(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getAPI();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchSubmit}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />

        {isLoading ? (
          <p>Loading...</p>
        ) : ebooks.length ? (
          <EbookList ebooks={ebooks} />
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  );
}

export default Ebook;
