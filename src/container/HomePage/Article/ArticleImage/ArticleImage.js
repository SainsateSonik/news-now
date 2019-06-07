import React from "react";
import "./ArticleImage.css";

const ArticleImage = ({ images }) => {
  const { url, caption } = images.length ? images[images.length - 1] : {};

  return (
    <section className="article-image" style={attachStyle(url)}>
      <div className="article-image__caption">
        <p>{caption}</p>
      </div>
    </section>
  );
};

export default ArticleImage;

// ************************************************************************

function attachStyle(imageLink) {
  return {
    backgroundImage: `url(${imageLink})`,
    backgroundSize: "cover", // contain
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "right"
  };
}
