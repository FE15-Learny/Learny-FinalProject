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
          "https://6489db485fa58521cab0607f.mockapi.io/ebook"
        );

        const ebook = response?.data?.find(
          (ebook) => ebook.id === parseInt(ebookId)
        );

        if (ebook) {
          setEbook(ebook);
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
