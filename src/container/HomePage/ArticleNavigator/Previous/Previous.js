import React from "react";

const Previous = ({ currentArticle, totalArticles, gotoNext }) => {
  return (
    <div className="navigate news-navigator__next">
      <i
        className="fas fa-chevron-right"
        onClick={gotoNext}
        style={{
          transform: `translateX(${
            currentArticle < totalArticles - 1 ? "0" : "100px"
          })`
        }}
      />
    </div>
  );
};

export default Previous;
