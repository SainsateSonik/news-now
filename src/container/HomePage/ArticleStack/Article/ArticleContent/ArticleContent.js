import React from "react";
import "./ArticleContent.scss";

const ArticleContent = ({ title, description, reporter, url }) => {
  const articleReporter = reporter ? (
    <p className="news-repoter">
      <em>{`- "${reporter}"`}</em>
    </p>
  ) : null;

  return (
    <section className="news-content">
      <h2 className="news-title">{title}</h2>
      <p className="news-abstract">{description}</p>
      {articleReporter}
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        className="full-article-link"
      >
        Read full article
      </a>
    </section>
  );
};

export default ArticleContent;
