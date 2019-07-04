import React, { useContext } from "react";
import "./HomePage.scss";

import Context from "../../components/Context/Context";
import ArticleStack from "./ArticleStack/ArticleStack";
import ArticleNavigator from "./ArticleNavigator/ArticleNavigator";

const HomePage = ({ currentArticle, setCurrentArticle, getCategoryName }) => {
  const {
    state: {
      news,
      news: { current: currentNewsContext }
    }
  } = useContext(Context);

  const articles =
    currentNewsContext === ""
      ? news.home
      : news[getCategoryName(currentNewsContext)] || [];

  return (
    <div className="home">
      <ArticleStack
        articles={articles}
        currentArticle={currentArticle}
        gotoPrevious={gotoPreviousArticle}
        gotoNext={gotoNextArticle}
      />
      <ArticleNavigator
        totalArticles={articles.length}
        currentArticle={currentArticle}
        gotoPrevious={gotoPreviousArticle}
        gotoNext={gotoNextArticle}
      />
    </div>
  );

  // ***************************************************************************

  function gotoPreviousArticle() {
    currentArticle > 0 && setCurrentArticle(currentArticle - 1);
  }

  function gotoNextArticle() {
    currentArticle < articles.length - 1 &&
      setCurrentArticle(currentArticle + 1);
  }
};

export default HomePage;
