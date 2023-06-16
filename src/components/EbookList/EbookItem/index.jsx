import React from "react";
import "./ebookitem.css";
import { Link } from "react-router-dom";
import Chip from "../../common/Chip";

function EbookItem({
  ebook: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover,
  },
}) {
  return (
    <div className="ebookitem-wrap">
      <img src={`${cover}`} alt="cover" className="ebookitem-cover" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="ebookitem-desc">{description}</p>

      <div className="footer">
        <div className="ebookitem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="ebookitem-link" to={`/ebook/${id}`}>
          ➝
        </Link>
      </div>
    </div>
  );
}

export default EbookItem;
