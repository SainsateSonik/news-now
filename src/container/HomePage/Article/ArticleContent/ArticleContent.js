import React from "react";
import "./ArticleContent.css";

const ArticleContent = ({ title, description, reporter, url }) => {
  const reporterLine = reporter ? (
    <p className="news-repoter">
      <em>{`- "${reporter}"`}</em>
    </p>
  ) : null;

  return (
    <section className="news-content">
      <h2 className="news-title">{title}</h2>
      <p className="news-abstract">{description}</p>
      {reporterLine}
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
