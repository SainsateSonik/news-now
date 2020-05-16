import * as actionTypes from "../actionTypes/topStories";

export const initialState = {
  news: {
    current: "home",
    home: [],
  },
  sections: [
    { label: "arts", value: "arts" },
    { label: "automobiles", value: "automobiles" },
    { label: "books", value: "books" },
    { label: "business", value: "business" },
    { label: "fashion", value: "fashion" },
    { label: "food", value: "food" },
    { label: "health", value: "health" },
    { label: "home", value: "home" },
    { label: "insider", value: "insider" },
    { label: "magazine", value: "magazine" },
    { label: "movies", value: "movies" },
    { label: "NY-region", value: "nyregion" },
    { label: "obituaries", value: "obituaries" },
    { label: "opinion", value: "opinion" },
    { label: "politics", value: "politics" },
    { label: "real-estate", value: "realestate" },
    { label: "science", value: "science" },
    { label: "sports", value: "sports" },
    { label: "sunday-review", value: "sundayreview" },
    { label: "technology", value: "technology" },
    { label: "theater", value: "theater" },
    { label: "t-magazine", value: "t-magazine" },
    { label: "travel", value: "travel" },
    { label: "upshot", value: "upshot" },
    { label: "us", value: "us" },
    { label: "world", value: "world" },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_NEWS:
      return setNews(state, action);
    case actionTypes.SET_NEWS_CONTEXT:
      return setCurrentNewsContext(state, action);
    default:
      return state;
  }
};

export default reducer;

// **********************************************************************************************

function setNews(state, action) {
  const [, category] = Object.keys(action);
  return {
    ...state,
    news: {
      ...state.news,
      [category]: action[category],
    },
  };
}

function setCurrentNewsContext(state, { current }) {
  return {
    ...state,
    news: {
      ...state.news,
      current,
    },
  };
}
