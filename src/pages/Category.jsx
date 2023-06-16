import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "../style/Category.css";
import "../index.css";

function Category() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/category");
  }, []);

  return (
    <>
      {/*-------------------------------- HERO --------------------------------*/}
      <section id="cat">
        <div className="cat-judul">
          <h1>CATEGORY</h1>
          <p>
            Learny provides several learning categories that can assist you with
            various learning methods.
          </p>
        </div>
      </section>
      <section id="card">
        <div className="roa">
          <div className="b-card">
            <img src="src/assets/img/cat1.png" width={275} alt="cat1" />
            <h4>E-Books</h4>
            <div className="foot">
              <p>
                Providing various kinds of books related to <br />
                programming and web development.
              </p>
            </div>
            <div className="bottom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 9.9V8.2q.825-.35 1.688-.525T17.5 7.5q.65 0 1.275.1T20 7.85v1.6q-.6-.225-1.213-.338T17.5 9q-.95 0-1.825.238T14 9.9Zm0 5.5v-1.7q.825-.35 1.688-.525T17.5 13q.65 0 1.275.1t1.225.25v1.6q-.6-.225-1.213-.338T17.5 14.5q-.95 0-1.825.225T14 15.4Zm0-2.75v-1.7q.825-.35 1.688-.525t1.812-.175q.65 0 1.275.1T20 10.6v1.6q-.6-.225-1.213-.338T17.5 11.75q-.95 0-1.825.238T14 12.65ZM6.5 16q1.175 0 2.288.263T11 17.05V7.2q-1.025-.6-2.175-.9T6.5 6q-.9 0-1.788.175T3 6.7v9.9q.875-.3 1.738-.45T6.5 16Zm6.5 1.05q1.1-.525 2.212-.788T17.5 16q.9 0 1.763.15T21 16.6V6.7q-.825-.35-1.713-.525T17.5 6q-1.175 0-2.325.3T13 7.2v9.85ZM12 20q-1.2-.95-2.6-1.475T6.5 18q-1.325 0-2.775.5T1 20.05V5.55Q2.1 4.8 3.588 4.4T6.5 4q1.45 0 2.838.375T12 5.5q1.275-.75 2.663-1.125T17.5 4q1.425 0 2.913.4T23 5.55v14.5Q21.75 19 20.287 18.5T17.5 18q-1.5 0-2.9.525T12 20Zm-5-8.475Z"
                />
              </svg>
              <p>500+ E-Books</p>
              <a href="/ebook" className="btn">
                See All
              </a>
            </div>
          </div>
          <div className="b-card">
            <img src="src/assets/img/cat2.png" width={275} alt="cat2" />
            <h4>Articles</h4>
            <div className="foot">
              <p>
                Providing various articles that contain <br />
                knowledge, information, and others.
              </p>
            </div>
            <div className="bottom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8 17h5q.425 0 .713-.288T14 16q0-.425-.288-.713T13 15H8q-.425 0-.713.288T7 16q0 .425.288.713T8 17Zm0-4h8q.425 0 .713-.288T17 12q0-.425-.288-.713T16 11H8q-.425 0-.713.288T7 12q0 .425.288.713T8 13Zm0-4h8q.425 0 .713-.288T17 8q0-.425-.288-.713T16 7H8q-.425 0-.713.288T7 8q0 .425.288.713T8 9ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z"
                />
              </svg>
              <p>500+ Articles</p>
              <a href="/article" className="btn">
                See All
              </a>
            </div>
          </div>
          <div className="b-card">
            <img src="src/assets/img/cat3.png" width={275} alt="cat3" />
            <h4>Video Learning</h4>
            <div className="foot">
              <p>
                Provides various kinds of learning videos <br />
                which can help in learning.
              </p>
            </div>
            <div className="bottom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h12q.825 0 1.413.588T18 6v4.5l3.15-3.15q.225-.225.537-.113T22 7.7v8.6q0 .35-.313.463t-.537-.113L18 13.5V18q0 .825-.588 1.413T16 20H4Zm2.025-4h7.95q.325 0 .463-.275t-.063-.525l-2.425-3.175q-.15-.2-.4-.2t-.4.2L9.25 14.5L8.1 13q-.15-.2-.4-.2t-.4.2l-1.675 2.2q-.2.25-.063.525t.463.275Z"
                />
              </svg>
              <p>500+ Videos</p>
              <a href="/video" className="btn">
                See All
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
