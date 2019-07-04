import React from "react";
import Article from "./Article/Article";
import "./ArticleStack.scss";

const ArticleStack = ({ currentArticle, articles, gotoPrevious, gotoNext }) => {
  let scrollStart = 0;
  let scrollEnd = 0;

  const articlesList = articles.map(article => {
    return <Article key={article.url} article={article} />;
  });

  return (
    <div
      className="top-news"
      onTouchStart={touchStart}
      onTouchMove={touching}
      onTouchEnd={touchEnd}
      style={{
        transform: `translateX(${currentArticle * -100}vw)`
      }}
    >
      {articlesList}
    </div>
  );

  function touchStart(e) {
    scrollStart = scrollEnd = getHorizontalPosition(e);
  }

  function touching(e) {
    scrollEnd = getHorizontalPosition(e);
  }

  function touchEnd(e) {
    const scrollThreshold = 50;
    if (scrollStart > scrollEnd + scrollThreshold) {
      gotoNext();
    } else if (scrollStart < scrollEnd - scrollThreshold) {
      gotoPrevious();
    } else {
      console.log("go on scroll more...");
    }
  }

  function getHorizontalPosition(e) {
    return e.targetTouches[0].clientX;
  }
};

export default ArticleStack;
