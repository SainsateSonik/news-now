import * as actionTypes from "../actionTypes/topStories";

export const initialState = {
  news: {
    home: [],
    sections: {}
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TOP_NEWS:
      return setHomeNews(state, action);
    default:
      return state;
  }
};

export default reducer;

// **********************************************************************************************

function setHomeNews(state, { home }) {
  return {
    ...state,
    news: {
      ...state.news,
      home
    }
  };
}
