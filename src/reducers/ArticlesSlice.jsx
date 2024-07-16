import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLoading: false,
  error: null,
  article: [ ],
  articleDetail: null,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    articleStart: (state) => {
      state.isLoading = true;
    },
    articleSuccess: (state, actions) => {
      (state.isLoading = false), 
    
      state.article = actions.payload;
     
    },
    articleError: (state, actions) => {
      (state.isLoading = false),

      state.error = actions.payload;
    },

    articleDetailStart: (state) => {
      state.isLoading = true;
    },
    articleDetailSuccess: (state, actions) => {
      (state.isLoading = false), 
    
      state.articleDetail = actions.payload;
     
    },
    articleDetailError: (state, actions) => {
      (state.isLoading = false),

      state.error = actions.payload;
    },
    createArticleStart: (state) => {
      state.isLoading = true;
    },
    createArticleSuccess: (state) => {
      (state.isLoading = false) 
    
    },
    createArticleError: (state, actions) => {
      (state.isLoading = false),

      state.error = actions.payload;
    },
  
  },
});
export const { articleError, articleSuccess, articleStart, articleDetailStart , articleDetailSuccess, articleDetailError, createArticleStart, createArticleSuccess, createArticleError} = articleSlice.actions;
export default articleSlice.reducer;