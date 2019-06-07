import React from "react";
import "./Article.css";

import ArticleImage from "./ArticleImage/ArticleImage";
import ArticleContent from "./ArticleContent/ArticleContent";

const Article = props => {
  const {
    multimedia,
    title,
    url,
    byline: reporter,
    abstract: description
  } = props.article;

  return (
    <article className="news-article">
      <ArticleImage images={multimedia} />
      <ArticleContent
        title={title}
        description={description}
        reporter={reporter}
        url={url}
      />
    </article>
  );
};

export default Article;
