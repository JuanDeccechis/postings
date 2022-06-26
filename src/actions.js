export const types = {
    LOAD_POSTS_REQUEST: "LOAD_POSTS_REQUEST",
    LOAD_POSTS_SUCCESS: "LOAD_POSTS_SUCCESS",
    LOAD_POSTS_FAILURE: "LOAD_POSTS_FAILURE",
  };

  export const loadPosts = () => {
    return {
        type: types.LOAD_POSTS_REQUEST
      };
  }