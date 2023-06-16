import React, { useEffect, useState } from "react";
import { ebooklist } from "../config/dataebook";
import EbookList from "../components/EbookList";
import HeaderEbook from "../components/HeaderEbook";
import SearchBar from "../components/Home/SearchBar";
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
      ebook.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setEbooks(filteredEbooks);
  };

  const handleClearSearch = () => {
    setEbooks(ebooklist);
    setSearchKey("");
  };

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get(
          "https://6489db485fa58521cab0607f.mockapi.io/ebook"
        );
        setEbooks(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getAPI();
  }, []);

  return (
    <div>
      <HeaderEbook />
      <div className="ebook-container">
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
