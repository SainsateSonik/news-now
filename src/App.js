import React, { useReducer, useEffect } from "react";
import "./App.css";

import { Provider } from "./components/Context/Context";
import topStoriesReducer, {
  initialState as topStoriesInitialState
} from "./store/reducer/topStories";
import * as actionTypes from "./store/actionTypes/topStories";

import HomePage from "./container/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const KEY = "i7wBfGA1uIKkNqoRPfw8sxQGcWXe8AVq";

function App() {
  const [state, dispatch] = useReducer(
    topStoriesReducer,
    topStoriesInitialState
  );

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${KEY}`)
      .then(response => response.json())
      .then(({ results }) => {
        console.log(results);
        dispatch({
          type: actionTypes.SET_TOP_NEWS,
          home: results
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Provider value={{ state, dispatch }}>
      <Header />
      <HomePage />
      <Footer />
    </Provider>
  );
}

export default App;
