import React from "react";

const Next = ({ currentArticle, gotoPrevious }) => {
  // const [count, setCount] = useState(0);
  // console.log(count);

  return (
    <div className="navigate news-navigator__previous">
      <i
        className="fas fa-chevron-left"
        onClick={gotoPrevious}
        style={{
          transform: `translateX(${currentArticle > 0 ? "0" : "-100px"})`
        }}
      />
    </div>
  );
};

export default Next;
