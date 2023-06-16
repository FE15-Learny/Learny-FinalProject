import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Chip from "../components/common/Chip";
import EmptyList from "../components/common/EmptyList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
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
    <div className="ebook-container">
      <Link className="ebook-goback" to="/ebook">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>

      {ebook ? (
        <div className="ebook-wrap">
          <header>
            <p className="ebook-date">Published {ebook.createdAt}</p>
            <h1>{ebook.title}</h1>
            <div className="ebook-subcategory">
              {ebook?.subCategory?.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <div className="row">
            <div className="left">
              <img src={ebook.cover} alt="cover" />
              <Link to={ebook.link}>
                <button className="btn">
                  <FontAwesomeIcon icon={faFilePdf} />
                  <span>D</span>Download PDF
                </button>
              </Link>
            </div>
            <div className="right">
              <ReactMarkdown className="ebook-content">
                {ebook.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

export default Ebookdetails;
