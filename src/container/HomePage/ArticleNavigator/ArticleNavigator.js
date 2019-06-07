import React from "react";
import "./ArticleNavigator.css";

const ArticleNavigator = ({
  getPrevious,
  getNext,
  currentArticle,
  totalArticles
}) => {
  return (
    <div className="news-navigator">
      <div className="navigate news-navigator__previous">
        <i
          className="fas fa-chevron-left"
          onClick={getPrevious}
          style={{
            transform: `translateX(${currentArticle > 0 ? "0" : "-100px"})`
          }}
        />
      </div>
      <div className="navigate news-navigator__next">
        <i
          className="fas fa-chevron-right"
          onClick={getNext}
          style={{
            transform: `translateX(${
              currentArticle < totalArticles - 1 ? "0" : "100px"
            })`
          }}
        />
      </div>
    </div>
  );
};

export default ArticleNavigator;
