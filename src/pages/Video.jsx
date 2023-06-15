import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmptyList from '../components/common/EmptyList';
import VideoList from '../components/Home/VideoList';
import Header from '../components/Home/HeaderVideo';
import SearchBar from '../components/Home/SearchBar';
import { videoList } from '../config/datavideo';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/video");
  }, []);

  const [videos, setVideos] = useState(videoList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for video by category
  const handleSearchResults = () => {
    const allVideos = videoList;
    const filteredVideos = allVideos.filter((video) =>
    video.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setVideos(filteredVideos);
  };

  // Clear search and show all videos
  const handleClearSearch = () => {
    setVideos(videoList);
    setSearchKey('');
  };

  return (

    <div>
      {/* Page Header */}
      <Header 
      title="All Videos" 
      description="Watch videos that can help you and improve your programming skills" 
      />
       
       <div id='sectionvid'>
      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Video List & Empty View */}
      {!videos.length ? <EmptyList /> : <VideoList videos={videos} />}
      </div>
    </div>
  );
};

export default Home;
