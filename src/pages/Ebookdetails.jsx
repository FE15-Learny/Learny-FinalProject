import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Chip from "../components/common/Chip";
import EmptyList from "../components/common/EmptyList";
import "../style/Ebook.css";
import axios from "axios";

function Ebookdetails() {
  const { ebookId } = useParams();
  const [ebook, setEbook] = useState(null);

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get(
          "https://64833958f2e76ae1b95c29a5.mockapi.io/articles"
        );

        const article = response?.data?.find(
          (article) => article.id === parseInt(articleId)
        );

        if (article) {
          setArticle(article);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getAPI();
  }, []);

  return (
    <div className="container">
      <Link className="ebook-goback" to="/ebook">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>

      {ebook ? (
        <div className="ebook-wrap">
          <header>
            <p className="ebook-date">Published {ebook.createdAt}</p>
            <h1>{ebook.title}</h1>
            <div className="ebook-subcategory">
              {ebook.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={ebook.cover} alt="cover" />
          {/* <p className="ebook-desc">{ebook.content}</p> */}
          <ReactMarkdown className="ebook-content">
            {ebook.content}
          </ReactMarkdown>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

export default Ebookdetails;
