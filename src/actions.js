export const types = {
    LOAD_POSTS_REQUEST: "LOAD_POSTS_REQUEST",
    LOAD_POSTS_SUCCESS: "LOAD_POSTS_SUCCESS",
    LOAD_POSTS_FAILURE: "LOAD_POSTS_FAILURE",
    FILTER_POSTS_REQUEST: "FILTER_POSTS_REQUEST",
    FILTER_POSTS_SUCCESS: "FILTER_POSTS_SUCCESS",
    FILTER_POSTS_FAILURE: "FILTER_POSTS_FAILURE",
  };

  export const loadPosts = () => {
    return {
        type: types.LOAD_POSTS_REQUEST
      };
  }

  export const filterPosts = (condition) => {
    return {
        type: types.FILTER_POSTS_REQUEST,
        condition
      };
  }