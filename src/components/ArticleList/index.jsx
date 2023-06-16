import React from "react";
import ArticleItem from "./ArticleItem";
import './articlelist.css'

function ArticleList({ articles }) {
  return (
    <div className="articlelist-wrap">
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
}

export default ArticleList;