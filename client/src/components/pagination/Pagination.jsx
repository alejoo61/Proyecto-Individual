import React from "react";
import "../pagination/pagination.styles.css";

const Pagination = ({ page, setPage, max }) => {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };
  const handleNext = () => {
    if (page < max) setPage(page + 1);
  };
  return (
    <div className="pagination">
      <button className="buttonPage" onClick={handlePrev}>
        Prev
      </button>
      <h2>{page}</h2>
      <p> de {max}</p>
      <button className="buttonPage" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
