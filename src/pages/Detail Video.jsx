import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { videoList } from "../config/datavideo";
import Chip from "../components/common/Chip";
import EmptyList from "../components/common/EmptyList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import "../style/video.css";

library.add(faShareAlt);

function Video() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    let video = videoList.find((video) => video.id === parseInt(id));
    if (video) {
      setVideo(video);
    }
  }, [id]);

  const handleShare = () => {
    const url = window.location.href;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          // Tampilkan notifikasi bahwa link berhasil disalin 
          Swal.fire({
            title: "Link telah disalin!",
            customClass: {
              popup: "my-custom-popup-class",
            },
          });
        })
        .catch((error) => {
          // Tampilkan pesan error jika gagal menyalin link 
          console.error("Gagal menyalin link:", error);
        });
    } else {
      // Fallback jika browser tidak mendukung navigator.clipboard atau tidak berjalan dalam secure context
      // Biasanya menampilkan teks dan menginstruksikan pengguna untuk menyalin link secara manual
      Swal.fire({
        title: "Salin link secara manual: " + url,
        customClass: {
          popup: "my-custom-popup-class",
        },
      });
    }  
    
  }
  return (
    <div id="video-section">
      <Link className="video-goBack" to="/video">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      
      {video ? (
        <div className="video-wrap">
          <header>
            <h1>{video.title}</h1>
            <div className="video-subCategory">
              {video.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>

          <iframe
            className="video-cover"
            width="100%"
            height="auto"
            src={video.cover}
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <p className="video-date">Published {video.createdAt}</p>

          <div className="video-profshare">
            <div className="video-author">
              <img src={video.authorAvatar} alt="avatar" />
              <h6>{video.authorName}</h6>
            </div>
            <div className="video-btnshare">
              <FontAwesomeIcon
                icon={faShareAlt}
                size="3x"
                onClick={handleShare}
              />
            </div>
          </div>

          <p className="video-desc">{video.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}

    </div>
  );
}

export default Video;
