import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import Chip from "../components/common/Chip";
import EmptyList from "../components/common/EmptyList";
import '../style/Article.css';
import axios from "axios";

function Articledetails() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get('https://64833958f2e76ae1b95c29a5.mockapi.io/articles')
        
        const article = response?.data?.find((article) => article.id === parseInt(articleId));

        if (article) {
          setArticle(article);
        }
      } catch (error) {
        console.error(error)
      }
    }

    getAPI()
  }, []);

  return (
    <div className="container article-detail">
      <Link className="article-goback" to="/article">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>

      {article ? (
        <div className="article-wrap">
          <header>
            <p className="article-date">Published {article.createdAt}</p>
            <h1>{article.title}</h1>
            <div className="article-subcategory">
              {article.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={article.cover} alt="cover" />
          <ReactMarkdown className="article-content">{article.content}</ReactMarkdown>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

export default Articledetails;
