export const types = {
    LOAD_POSTS_REQUEST: "LOAD_POSTS_REQUEST",
    LOAD_POSTS_SUCCESS: "LOAD_POSTS_SUCCESS",
    LOAD_POSTS_FAILURE: "LOAD_POSTS_FAILURE",
    FILTER_POSTS_BY_LOCATION_REQUEST: "FILTER_POSTS_BY_LOCATION_REQUEST",
    FILTER_POSTS_BY_TYPE_REQUEST: "FILTER_POSTS_BY_TYPE_REQUEST",
    FILTER_POSTS_BY_TYPE_AND_LOCATION_REQUEST: "FILTER_POSTS_BY_TYPE_AND_LOCATION_REQUEST",
    FILTER_POSTS_SUCCESS: "FILTER_POSTS_SUCCESS",
    FILTER_POSTS_FAILURE: "FILTER_POSTS_FAILURE",
  };

  export const loadPosts = () => {
    return {
        type: types.LOAD_POSTS_REQUEST
      };
  }

  export const filterPostsByType = (condition) => {
    return {
        type: types.FILTER_POSTS_BY_TYPE_REQUEST,
        condition
      };
  }

  export const filterPostsByLocation = (condition) => {
    return {
        type: types.FILTER_POSTS_BY_LOCATION_REQUEST,
        condition
      };
  }

  export const filterPostsByTypeAndLocation = (conditionType, conditionLocation) => {
    return {
        type: types.FILTER_POSTS_BY_TYPE_AND_LOCATION_REQUEST,
        conditionType,
        conditionLocation
      };
  }