import React from "react";
import "./articleitem.css";
import { Link } from "react-router-dom";
import Chip from "../../common/Chip";

function ArticleItem({
  article: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover
  },
}) {
  return (
    <div className="articleitem-wrap">
      <img src={`${cover}`} alt="cover" className="articleitem-cover" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="articleitem-desc">{description}</p>

      <div className="footer">
        <div className="articleitem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="articleitem-link" to={`/article/${id}`}>
        ➝
        </Link>
      </div>
    </div>
  );
}

export default ArticleItem;