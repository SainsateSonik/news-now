import React, { useContext } from "react";
import "./Header.scss";

import Context from "../Context/Context";

const appTitle = "News Now";

const Header = ({ selectNewsCategory, toggleCategories, gotoHome }) => {
  const {
    state: {
      sections: newsSections = [],
      news: { current }
    }
  } = useContext(Context);

  const newsOptions = newsSections.map(section => (
    <li key={section}>
      <span onClick={selectNewsCategory.bind(null, section)}>{section}</span>
    </li>
  ));

  return (
    <header>
      <div className="logo" onClick={gotoHome}>
        {appTitle}
      </div>
      <div className="news-context">
        <div className="news-context__current" onClick={toggleCategories}>
          <span>{current}</span>
          <div className="cross">
            <div className="cross__wrapper" />
          </div>
        </div>
        <ul className="news-context__options">{newsOptions}</ul>
      </div>
    </header>
  );
};

export default Header;
