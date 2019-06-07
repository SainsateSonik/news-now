import React, { useContext, useState, useEffect } from "react";
import "./HomePage.css";

import Context from "../../components/Context/Context";
import Article from "./Article/Article";
import ArticleNavigator from "./ArticleNavigator/ArticleNavigator";

const HomePage = () => {
  const {
    state: {
      news: { home: articles = [] }
    }
  } = useContext(Context);
  // const [news, setNews] = useState(articles || []);
  const [currentArticle, setCurrentArticle] = useState(0);

  useEffect(
    () => {
      const timer = setTimeout(nextArticle, 5000);
      return () => clearTimeout(timer);
    }
    // [setCurrentArticle, currentArticle, articles, nextArticle]
  );

  // useEffect(() => {
  //   console.log("changing...");
  //   setNews(articles.slice(currentArticle, currentArticle + 5));
  // }, [currentArticle, articles]);

  const articlesList = articles.map(article => {
    return <Article key={article.url} article={article} />;
  });

  return (
    <div className="home">
      <div
        className="top-news"
        style={{
          transform: `translateX(${currentArticle * -100}vw)`
        }}
      >
        {articlesList}
      </div>
      <ArticleNavigator
        currentArticle={currentArticle}
        // totalArticles={news.length}
        totalArticles={articles.length}
        getPrevious={previousArticle}
        getNext={nextArticle}
      />
    </div>
  );

  // ***************************************************************************
  function previousArticle() {
    if (currentArticle > 0) setCurrentArticle(currentArticle - 1);
  }

  function nextArticle() {
    if (currentArticle < articles.length - 1)
      setCurrentArticle(currentArticle + 1);
  }
};

export default HomePage;
