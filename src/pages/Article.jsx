import React, { useEffect, useState } from "react";
import { articlelist } from "../config/dataarticle";
import ArticleList from "../components/ArticleList";
import HeaderArticle from "../components/HeaderArticle";
import SearchBar from "../components/Home/SearchBar";
import EmptyList from "../components/common/EmptyList";
import axios from "axios";
import "../style/Article.css";

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
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getAPI();
  }, []);

  return (
    <div>
      <HeaderArticle />
      <div className="container article">
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
