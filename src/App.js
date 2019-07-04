import React, { useState, useReducer, useEffect } from "react";

import { Provider } from "./components/Context/Context";
import topStoriesReducer, {
  initialState as topStoriesInitialState
} from "./store/reducer/topStories";
import {
  setNewsContent,
  setCurrentNewsContext
} from "./store/actionCreators/topStories";

import HomePage from "./container/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const KEY = "i7wBfGA1uIKkNqoRPfw8sxQGcWXe8AVq";

function App() {
  const [state, dispatch] = useReducer(
    topStoriesReducer,
    topStoriesInitialState
  );
  const [currentArticle, setCurrentArticle] = useState(0);

  useEffect(() => {
    fetchNewsArticles("home");
  }, []);

  return (
    <Provider value={{ state, dispatch }}>
      <Header
        toggleCategories={toggleCategories}
        selectNewsCategory={selectNewsCategory}
        gotoHome={gotoHome}
      />
      <HomePage
        currentArticle={currentArticle}
        setCurrentArticle={setCurrentArticle}
        getCategoryName={getCategoryName}
      />
      <Footer />
    </Provider>
  );

  // ***************************************************************************************

  function fetchNewsArticles(category) {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${KEY}`
    )
      .then(response => response.json())
      .then(({ results }) => {
        dispatch(setNewsContent(category, results));
      })
      .catch(console.error);
  }

  function toggleCategories() {
    document
      .querySelector(".news-context__current")
      .classList.toggle("show-categories");
  }

  function selectNewsCategory(section) {
    const category = getCategoryName(section);
    fetchNewsArticles(category);
    dispatch(setCurrentNewsContext(section));
    setCurrentArticle(0);
    toggleCategories();
  }

  function gotoHome() {
    fetchNewsArticles("home");
    dispatch(setCurrentNewsContext("home"));
    setCurrentArticle(0);
  }

  function getCategoryName(section) {
    return section
      .split(" ")
      .join("")
      .toLowerCase();
  }
}

export default App;
