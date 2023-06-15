import React from 'react';
import VideoItem from './VideoItem';
import './styles.css';

function VideoList({ videos }) {
  return (
    <div className='videoList-wrap'>
      {videos.map((video, index) => (
        <VideoItem key={index} video={video} />
      ))}
    </div>
  );
}

export default VideoList;
