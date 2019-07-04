import * as actionTypes from "../actionTypes/topStories";

export const setNewsContent = (category, news) => ({
  type: actionTypes.SET_NEWS,
  [category]: news
});

export const setCurrentNewsContext = newsContext => ({
  type: actionTypes.SET_NEWS_CONTEXT,
  current: newsContext
});
