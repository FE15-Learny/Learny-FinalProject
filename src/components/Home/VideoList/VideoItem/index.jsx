import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

function VideoItem({
  video: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) {
  return (
    <div className="videoItem-wrap">
      <iframe
        className="videoItem-cover"
        width="100%"
        height="auto"
        src={cover}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <Chip label={category} />

      <div className="videoItem-author">
        <img src={authorAvatar} alt="avatar" />
        <div className="videoItem-authorInfo">
          <h6>{authorName}</h6>
          <p>{createdAt}</p>
        </div>
      </div>

      <Link to={`/video/${id}`} style={{ textDecoration: 'none' }}>
        <h3 className='title-vid'>{title}</h3>
      </Link>

      <footer></footer>
    </div>
  );
}

export default VideoItem;
