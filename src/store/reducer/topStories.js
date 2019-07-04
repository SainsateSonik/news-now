import * as actionTypes from "../actionTypes/topStories";

export const initialState = {
  news: {
    current: "home",
    home: []
  },
  sections: [
    "arts",
    "automobiles",
    "books",
    "business",
    "fashion",
    "food",
    "health",
    "home",
    "insider",
    "magazine",
    "movies",
    "national",
    "NY region",
    "obituaries",
    "opinion",
    "politics",
    "real estate",
    "science",
    "sports",
    "sunday review",
    "technology",
    "theater",
    "tmagazine",
    "travel",
    "upshot",
    "world"
  ]
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
      [category]: action[category]
    }
  };
}

function setCurrentNewsContext(state, { current }) {
  return {
    ...state,
    news: {
      ...state.news,
      current
    }
  };
}
