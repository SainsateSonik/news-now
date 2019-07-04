import React from "react";
import "./ArticleNavigator.scss";

import Next from "./Next/Next";
import Previous from "./Previous/Previous";

const ArticleNavigator = ({
  gotoPrevious,
  gotoNext,
  currentArticle,
  totalArticles
}) => {
  return (
    <div className="news-navigator">
      <Next currentArticle={currentArticle} gotoPrevious={gotoPrevious} />
      <Previous
        currentArticle={currentArticle}
        totalArticles={totalArticles}
        gotoNext={gotoNext}
      />
    </div>
  );
};

export default ArticleNavigator;
