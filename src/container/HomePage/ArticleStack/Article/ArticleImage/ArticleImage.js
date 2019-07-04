import React from "react";
import "./ArticleImage.scss";

import noImage from "../../../../../static/images/not-available.png";

const ArticleImage = ({ images }) => {
  const { url, caption } = images.length ? images[images.length - 1] : {};
  const backCover = caption ? "article-image__back-drop-roll-up" : null;

  return (
    <section className="article-image" style={attachStyle(url)}>
      <div className="article-image__caption">
        <span className={backCover} />
        <p>{caption}</p>
      </div>
    </section>
  );

  // ************************************************************************

  function attachStyle(imageLink) {
    return {
      backgroundImage: `url(${imageLink || noImage})`,
      backgroundSize: imageLink ? "cover" : "contain",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "center"
    };
  }
};

export default ArticleImage;
