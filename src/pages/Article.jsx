import React, { useEffect, useState } from "react";
import { articlelist } from "../config/data";
import ArticleList from "../components/ArticleList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import EmptyList from "../components/common/EmptyList";
import axios from "axios";

function Article() {
  const [articles, setArticles] = useState(articlelist);
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allArticles = articlelist;
    const filteredArticles = allArticles.filter((article) =>
      article.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setArticles(filteredArticles);
  };

  const handleClearSearch = () => {
    setArticles(articlelist);
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
        ) : articles.length ? (
          <ArticleList articles={articles} />
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  );
}

export default Article;
