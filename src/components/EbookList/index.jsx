import React from "react";
import EbookItem from "./EbookItem";
import "./ebooklist.css";

function EbookList({ ebooks }) {
  return (
    <div className="ebooklist-wrap">
      {ebooks.map((ebook) => (
        <EbookItem ebook={ebook} key={ebook.id} />
      ))}
    </div>
  );
}

export default EbookList;
